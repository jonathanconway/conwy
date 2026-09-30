import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptGenContentMdxTemplate = ({
  content,
}: PromptGenTemplateParams) =>
  `

${content}

`.trim();
