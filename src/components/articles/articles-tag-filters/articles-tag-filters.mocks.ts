import { createPostMocks } from "@/framework";

import { ArticlesTagFiltersProps } from "./articles-tag-filters";

export function createArticlesTagFiltersPropsMock(): ArticlesTagFiltersProps {
  return {
    items: createPostMocks(),
  };
}
