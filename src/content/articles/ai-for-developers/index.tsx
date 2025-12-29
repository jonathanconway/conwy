import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const aiForDevelopersArticle: Article = {
  type: "article",
  meta,
  content: <Content />,
};
