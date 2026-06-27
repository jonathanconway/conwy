import { sentenceCase } from "@/framework/client";

import { ChecklistItemTagsProps } from "./checklist-item-tags-props";
import * as styles from "./checklist-item-tags.css";

export function ChecklistItemTags(props: ChecklistItemTagsProps) {
  if (props.tags.length === 0) {
    return;
  }

  return (
    <div className={styles.tags}>
      {props.tags.map((tag) => (
        <span key={tag.tag.name} className={styles.tag}>
          <span className={styles.tagGroup}>{tag.tagGroup.title}</span>
          <span className={styles.tagName}>{tag.tag.title}</span>
        </span>
      ))}
    </div>
  );
}
