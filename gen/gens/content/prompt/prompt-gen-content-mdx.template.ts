import { MDX_TEXT_HERE_TOKEN } from "../../../template-utils";

import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptGenContentMdxTemplate = ({
  content = MDX_TEXT_HERE_TOKEN,
}: PromptGenTemplateParams) =>
  `
  
${content}

`.trim();
