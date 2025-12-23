import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const subformatsArticle = {
  meta,
  content: <Content />,
} as Article;
