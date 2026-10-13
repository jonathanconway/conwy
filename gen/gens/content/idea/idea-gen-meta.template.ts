import { IdeaGenTemplateParams } from "./idea-gen-template-params";

export const ideaGenMetaTemplate = ({ slug, title }: IdeaGenTemplateParams) =>
  `

import { IdeaMeta } from "@/framework";

export const meta: IdeaMeta = {
  slug: "${slug}",
  title: "${title}",
};

`.trim();
