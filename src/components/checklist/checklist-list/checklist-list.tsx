import { ListUnordered } from "../../list";

import { ChecklistListProps } from "./checklist-list-props";

export function ChecklistList(props: ChecklistListProps) {
  return <ListUnordered noBullets {...props} />;
}
