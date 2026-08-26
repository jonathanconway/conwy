import { createChecklistMocks } from "@/framework/client";

import { ChecklistsTagFiltersProps } from "./checklists-tag-filters";

export function createChecklistsTagFiltersPropsMock(): ChecklistsTagFiltersProps {
  return {
    items: createChecklistMocks(),
  };
}
