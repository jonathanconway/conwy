import { IconTypes } from "../../../icon";
import { Link } from "../../../link";

import * as styles from "./checklist-item-link.css";

interface ChecklistItemLinkProps {
  readonly checklistName: string;
  readonly checklistItemName: string;
}

export function ChecklistItemLink(props: ChecklistItemLinkProps) {
  return (
    <Link
      className={styles.checklistItemLink}
      href={`/checklists/${props.checklistName}/${props.checklistItemName}`}
      target="_blank"
      icon={IconTypes.Link}
      tooltip={{
        contents: "Link to individual checklist item",
      }}
    />
  );
}
