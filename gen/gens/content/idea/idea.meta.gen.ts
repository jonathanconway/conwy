import { IdeaGenTemplateParams } from "./idea.params";

export const ideaMetaGen = ({ title }: IdeaGenTemplateParams) =>
  `

import { IdeaMeta } from "@/framework/client";

export const meta: IdeaMeta = {
  title: "${title}",
};

`.trim();
