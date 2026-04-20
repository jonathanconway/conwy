import { createChecklistMock } from "@/framework/client";

import { ChecklistsListItemProps } from "./checklists-list-item";

export function createChecklistsListItemPropsMock(): ChecklistsListItemProps {
  return createChecklistMock().meta;
}
