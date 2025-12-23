import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const testingStepsArticle = {
  meta,
  content: <Content />,
} as Article;
