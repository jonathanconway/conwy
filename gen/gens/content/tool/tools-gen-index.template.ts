import { ToolGenTemplateParams } from "./tool-gen-template-params";

export const toolsGenIndexTemplate = ({ slug }: ToolGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
