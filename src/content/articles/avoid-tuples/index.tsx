import { Article, ContentTypes } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const avoidTuplesArticle: Article = {
  type: ContentTypes.Article,
  meta,
  content: <Content />,
};
