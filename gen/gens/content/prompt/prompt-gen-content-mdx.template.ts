import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptGenContentMdxTemplate = ({
  content,
}: PromptGenTemplateParams) =>
  `
  
${content ?? "{/* Full text here */}"}

`.trim();
