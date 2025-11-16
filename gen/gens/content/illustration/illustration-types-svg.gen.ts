import jscodeshift from "jscodeshift";
import { orderBy } from "lodash";
import * as tsParser from "recast/parsers/typescript";

import { IllustrationGenTemplateParams } from "./illustration.params";

export default ({ illustrationsTypesSrc }: IllustrationGenTemplateParams) => {
  const root = jscodeshift(illustrationsTypesSrc, {
    parser: tsParser,
  });

  const exportNamedDeclaration = root
    .find(jscodeshift.ExportNamedDeclaration)
    .at(0)
    .get();

  const propExpressions =
    exportNamedDeclaration.value.declaration.declarations[0].init.expression
      .properties;

  exportNamedDeclaration.value.declaration.declarations[0].init.expression.properties =
    orderBy(propExpressions, (propExpression) => propExpression.key.name);

  const afterSource = root.toSource();

  return afterSource;
};
