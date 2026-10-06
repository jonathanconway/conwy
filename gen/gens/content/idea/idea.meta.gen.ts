import { IdeaGenTemplateParams } from "./idea-gen-template-params";

export const ideaMetaGen = ({ slug, title }: IdeaGenTemplateParams) =>
  `

import { IdeaMeta } from "@/framework/client";

export const meta: IdeaMeta = {
  slug: "${slug}",
  title: "${title}",
};

`.trim();
