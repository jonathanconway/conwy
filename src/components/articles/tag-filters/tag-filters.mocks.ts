import { createPostMocks } from "@/framework/client";

import { TagFiltersProps } from "./tag-filters";

export function createTagFiltersPropsMock(): TagFiltersProps {
  return {
    items: createPostMocks(),
  };
}
