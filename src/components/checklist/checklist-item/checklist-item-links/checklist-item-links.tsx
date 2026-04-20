import { ChecklistItemLinksProps } from "./checklist-item-links-props";
import * as styles from "./checklist-item-links.css";

export function ChecklistItemLinks(props: ChecklistItemLinksProps) {
  return <div className={styles.checklistLinks} {...props} />;
}
