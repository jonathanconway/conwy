import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenMetaTemplate = ({
  slug,
  title,
  date,
  tagsEnumNames,
}: ArticleGenTemplateParams) =>
  `

import { ArticleMeta, PostTags } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "${title}",
  blurb: "",
  createdDate: "${date}",
  slug: "${slug}",
  tags: [
    ${tagsEnumNames.map((tagEnumName) =>
      `
      PostTags.${tagEnumName}
      `.trim(),
    )}
  ],
  socialLinks: [],
  discussionLinks: []
};

`.trim();
