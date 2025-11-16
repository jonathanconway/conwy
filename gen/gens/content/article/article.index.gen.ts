import { ArticleGenTemplateParams } from "./article.params";

export const articleIndexGen = ({ nameRootObject }: ArticleGenTemplateParams) =>
  `

import { Article } from "@/framework/client";

import content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject} = {
  meta,
  content,
} as Article;

`.trim();
