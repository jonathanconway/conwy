import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptGenIndexTemplate = ({
  nameRootObject,
}: PromptGenTemplateParams) =>
  `

import { ContentTypes, Prompt } from "@/framework/client";

import { meta } from "./meta";
import Content from "./content.mdx"

export const ${nameRootObject}: Prompt = {
  type: ContentTypes.Prompt,
  meta,
  content: <Content />,
};

`.trim();
