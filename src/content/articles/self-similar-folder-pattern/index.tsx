import { Article } from "@/framework/client";

import Content from "./content.mdx";
import { meta } from "./meta";

export const selfSimilarFolderPatternArticle: Article = {
  type: "article",
  meta,
  content: <Content />,
};
