import { createArticleMock } from "@/framework";

import { ArticlesListItemProps } from "./articles-list-item";

export function createArticlesListItemPropsMock(): ArticlesListItemProps {
  return {
    article: createArticleMock(),
  };
}
