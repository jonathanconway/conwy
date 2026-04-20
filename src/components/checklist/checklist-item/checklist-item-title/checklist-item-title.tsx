import { ChecklistItemTitleProps } from "./checklist-item-title-props";
import * as styles from "./checklist-item-title.css";

export function ChecklistItemTitle(props: ChecklistItemTitleProps) {
  return <span className={styles.checklistItemTitle} {...props} />;
}
