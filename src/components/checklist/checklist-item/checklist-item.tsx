"use client";

import { useId } from "react";

import { ChecklistItemDetails } from "./checklist-item-details";
import { ChecklistItemInput } from "./checklist-item-input";
import { ChecklistItemLabel } from "./checklist-item-label";
import { ChecklistItemLinks } from "./checklist-item-links";
import { ChecklistItemProps } from "./checklist-item-props";
import { ChecklistItemTags } from "./checklist-item-tags";
import { ChecklistItemTitle } from "./checklist-item-title";
import * as styles from "./checklist-item.css";

export function ChecklistItem(props: ChecklistItemProps) {
  const checklistItemId = useId();

  return (
    <li className={styles.checklistLi} id={props.item.name}>
      <label htmlFor={checklistItemId} className={styles.checklistLiLabel}>
        <ChecklistItemInput id={checklistItemId} />
        <ChecklistItemLabel>
          <ChecklistItemTitle>{props.item.title}</ChecklistItemTitle>
          <div>
            <ChecklistItemDetails>{props.item.details}</ChecklistItemDetails>
            <ChecklistItemLinks>{props.item.links}</ChecklistItemLinks>
            <ChecklistItemTags tags={props.item.tags} />
          </div>
        </ChecklistItemLabel>
      </label>
    </li>
  );
}
