import { ChecklistItemDetailsProps } from "./checklist-item-details-props";
import * as styles from "./checklist-item-details.css";

export function ChecklistItemDetails(props: ChecklistItemDetailsProps) {
  return <div className={styles.checklistDetails} {...props} />;
}
