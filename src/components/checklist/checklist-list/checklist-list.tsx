import { ChecklistListProps } from "./checklist-list-props";
import * as styles from "./checklist-list.css";

export function ChecklistList(props: ChecklistListProps) {
  return <ul className={styles.checklistUl}>{props.children}</ul>;
}
