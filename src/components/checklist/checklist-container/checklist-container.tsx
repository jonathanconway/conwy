import { ChecklistHeader } from "../checklist-header";

import { ChecklistContainerProps } from "./checklist-container-props";
import { CHECKLIST_CONTAINER_CLASS_NAME } from "./checklist-container.const";

export function ChecklistContainer(props: ChecklistContainerProps) {
  return (
    <>
      <ChecklistHeader checklistMeta={props.checklistMeta} />

      <div className={CHECKLIST_CONTAINER_CLASS_NAME}>{props.children}</div>
    </>
  );
}
