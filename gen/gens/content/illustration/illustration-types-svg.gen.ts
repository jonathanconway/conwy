import jscodeshift from "jscodeshift";
import { orderBy } from "lodash";
import * as tsParser from "recast/parsers/typescript";

import { IllustrationTypes } from "@/components";

import { IllustrationGenTemplateParams } from "./illustration.params";

export const illustrationTypesSvgGen = ({
  name,
  nameComponent,
  illustrationsTypesSvgSrc,
}: IllustrationGenTemplateParams) => {
  const root = jscodeshift(illustrationsTypesSvgSrc, {
    parser: tsParser,
  });

  const exportNamedDeclaration = root
    .find(jscodeshift.ExportNamedDeclaration)
    .at(0)
    .get();

  const propExpressions =
    exportNamedDeclaration.value.declaration.declarations[0].init.expression
      .properties;

  const newProperty = jscodeshift.objectProperty(
    jscodeshift.memberExpression(
      jscodeshift.identifier(`IllustrationTypes`),
      jscodeshift.identifier(nameComponent),
    ),
    // jscodeshift.identifier(nameComponent),
    jscodeshift.identifier(nameComponent),
  );
  newProperty.computed = true;
  propExpressions.push(newProperty);

  // console.log(
  //   "illustrationTypesSvgGen",
  //   exportNamedDeclaration.value.declaration.declarations[0].init.expression
  //     .properties[0].key,
  // );
  exportNamedDeclaration.value.declaration.declarations[0].init.expression.properties =
    orderBy(propExpressions, (propExpression) => propExpression.key.name);

  const afterSource = root.toSource();

  return afterSource;
};
