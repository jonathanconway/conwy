import { ArticleGenTemplateParams } from "./article.params";

export const ideaMetaGen = ({ name, title, date }: ArticleGenTemplateParams) =>
  `

import { ArticleMeta, PostTags } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "${title}",
  blurb: "",
  createdDate: "${date}",
  slug: "${name}",
  type: "article",
  tags: [],
  socialLinks: [],
  discussionLinks: []
};

`.trim();
