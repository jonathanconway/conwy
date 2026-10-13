import { createChecklistMock } from "@/framework";

import { ChecklistsListItemProps } from "./checklists-list-item";

export function createChecklistsListItemPropsMock(): ChecklistsListItemProps {
  return createChecklistMock().meta;
}
