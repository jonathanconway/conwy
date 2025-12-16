import jscodeshift from "jscodeshift";
import { orderBy } from "lodash";
import * as tsParser from "recast/parsers/typescript";

import { IllustrationGenTemplateParams } from "./illustration.params";

export const illustrationTypesGen = ({
  name,
  nameComponent,
  illustrationsTypesSrc,
}: IllustrationGenTemplateParams) => {
  const root = jscodeshift(illustrationsTypesSrc, {
    parser: tsParser,
  });

  const exportNamedDeclaration = root
    .find(jscodeshift.ExportNamedDeclaration)
    .filter(
      (node) =>
        (node.value.declaration as any)?.declarations?.[0].id.name ===
        "IllustrationTypes",
    )
    .at(0)
    .get().value;

  const propExpressions =
    exportNamedDeclaration.declaration.declarations[0].init.expression
      .properties;

  propExpressions.push(
    jscodeshift.objectProperty(
      jscodeshift.identifier(nameComponent),
      jscodeshift.literal(name),
    ),
  );

  exportNamedDeclaration.declaration.declarations[0].init.expression.properties =
    orderBy(propExpressions, (propExpression) => propExpression.key.name);

  const afterSource = root.toSource();

  return afterSource;
};
