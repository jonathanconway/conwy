import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenIndexTemplate = ({
  componentNameKebab,
}: ComponentGenTemplateParams) =>
  `

export * from "./${componentNameKebab}";

`.trim();
