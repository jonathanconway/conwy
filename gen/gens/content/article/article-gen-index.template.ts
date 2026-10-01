import { ArticleGenTemplateParams } from "./article-gen-template-params";

export const articleGenIndexTemplate = ({
  nameRootObject,
}: ArticleGenTemplateParams) =>
  `

import { Article, ContentTypes } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Article = {
  type: ContentTypes.Article,
  meta,
  content: <Content />,
};

`.trim();
