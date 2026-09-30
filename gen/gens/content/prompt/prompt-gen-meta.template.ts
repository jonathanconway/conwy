import { PromptGenTemplateParams } from "./prompt-gen-template-params";

export const promptGenMetaTemplate = ({
  slug,
  title,
}: PromptGenTemplateParams) =>
  `

import { PromptMeta } from "@/framework/client";

export const meta: PromptMeta = {
  slug: "${slug}",
  title: "${title}",
};

`.trim();
