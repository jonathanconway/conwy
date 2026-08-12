import { ArticleGenTemplateParams } from "./article.params";

export const articleIndexGen = ({ nameRootObject }: ArticleGenTemplateParams) =>
  `

import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Article = {
  type: "article",
  meta,
  content: <Content />,
};

`.trim();
