import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptsGenIndexTemplate = ({ slug }: PromptGenTemplateParams) =>
  `

export * from "./${slug}";

`.trim();
