import { ArticleGenTemplateParams } from "./article.params";

export const articleIndexGen = ({ nameRootObject }: ArticleGenTemplateParams) =>
  `

import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject} = {
  meta,
  content: <Content />,
} as Article;

`.trim();
