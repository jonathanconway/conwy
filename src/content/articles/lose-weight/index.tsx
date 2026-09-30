import { Article, ContentTypes } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const loseWeightArticle: Article = {
  type: ContentTypes.Article,
  meta,
  content: <Content />,
};
