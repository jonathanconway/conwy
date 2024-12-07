import { createPostMocks } from "@/framework/client";

import { ArticlesTagFiltersProps } from "./articles-tag-filters";

export function createArticlesTagFiltersPropsMock(): ArticlesTagFiltersProps {
  return {
    items: createPostMocks(),
  };
}
