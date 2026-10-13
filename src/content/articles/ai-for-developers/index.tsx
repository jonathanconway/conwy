import { Article, ContentTypes } from "@/framework";

import Content from "./content.mdx";
import { meta } from "./meta";

export const aiForDevelopersArticle: Article = {
  type: ContentTypes.Article,
  meta,
  content: <Content />,
};
