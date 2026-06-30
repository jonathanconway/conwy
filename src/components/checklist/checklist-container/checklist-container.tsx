import { cn } from "@/framework/client";

import { ChecklistHeader } from "../checklist-header";

import { ChecklistContainerProps } from "./checklist-container-props";
import { CHECKLIST_CONTAINER_CLASS_NAME } from "./checklist-container.const";
import * as styles from "./checklist-container.css";

export function ChecklistContainer(props: ChecklistContainerProps) {
  const bodyClassName = cn(
    styles.checklistContainer,
    CHECKLIST_CONTAINER_CLASS_NAME,
  );

  return (
    <>
      <ChecklistHeader checklistMeta={props.checklistMeta} />

      <div className={bodyClassName}>{props.children}</div>
    </>
  );
}
