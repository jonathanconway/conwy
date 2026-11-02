import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenMetaTemplate = ({
  slug,
  title,
  date,
  tagsItems,
}: ArticleGenTemplateParams) =>
  `

import { ArticleMeta, PostTags } from "@/framework";

export const meta: ArticleMeta = {
  title: "${title}",
  blurb: "",
  createdDate: "${date}",
  slug: "${slug}",
  tags: [${tagsItems}],
  socialLinks: [],
  discussionLinks: []
};

`.trim();
