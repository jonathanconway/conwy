import { Article, ContentTypes } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const mockDataArticle: Article = {
  type: ContentTypes.Article,
  meta,
  content: <Content />,
};
