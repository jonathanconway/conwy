import { cn } from "@/framework/client";

import { ChecklistItemTitleProps } from "./checklist-item-title-props";
import { CHECKLIST_ITEM_TITLE_CLASS_NAME } from "./checklist-item-title.const";
import * as styles from "./checklist-item-title.css";

export function ChecklistItemTitle(props: ChecklistItemTitleProps) {
  const {
    className = cn(CHECKLIST_ITEM_TITLE_CLASS_NAME, styles.checklistItemTitle),
    ...restProps
  } = props;

  return <span className={className} {...restProps} />;
}
