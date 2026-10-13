import { createChecklistMocks } from "@/framework";

import { ChecklistsTagFiltersProps } from "./checklists-tag-filters";

export function createChecklistsTagFiltersPropsMock(): ChecklistsTagFiltersProps {
  return {
    items: createChecklistMocks(),
  };
}
