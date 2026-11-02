import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenMixinsTemplate = ({
  componentNameCamel,
}: ComponentGenTemplateParams) =>
  `

export const ${componentNameCamel} = {};

`.trim();
