import { ToolGenTemplateParams } from "./tool-gen-template-params";

export const toolsIndexGen = ({ slug }: ToolGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
