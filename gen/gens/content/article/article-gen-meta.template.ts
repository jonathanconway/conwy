import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenMetaTemplate = ({
  slug,
  title,
  date,
}: ArticleGenTemplateParams) =>
  `

import { ArticleMeta, PostTags } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "${title}",
  blurb: "",
  createdDate: "${date}",
  slug: "${slug}",
  type: "article",
  tags: [],
  socialLinks: [],
  discussionLinks: []
};

`.trim();
