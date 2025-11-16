import { ToolGenTemplateParams } from "./tool.params";

export const toolsIndexGen = ({ name }: ToolGenTemplateParams) =>
  `

export * from "./${name}";

`.trim();
