import { createArticleMock } from "@/framework/client";

import { ArticlesListItemProps } from "./articles-list-item";

export function createArticlesListItemPropsMock(): ArticlesListItemProps {
  return createArticleMock().meta;
}
