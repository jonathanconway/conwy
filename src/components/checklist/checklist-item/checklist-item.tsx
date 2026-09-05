"use client";

import { useId } from "react";

import { useChecklistContext } from "../checklist-context";

import { ChecklistItemDetails } from "./checklist-item-details";
import { ChecklistItemInput } from "./checklist-item-input";
import { ChecklistItemLabel } from "./checklist-item-label";
import { ChecklistItemLink } from "./checklist-item-link";
import { ChecklistItemLinks } from "./checklist-item-links";
import { ChecklistItemProps } from "./checklist-item-props";
import { ChecklistItemTags } from "./checklist-item-tags";
import { ChecklistItemTitle } from "./checklist-item-title";
import * as styles from "./checklist-item.css";

export function ChecklistItem(props: ChecklistItemProps) {
  const checklistItemId = useId();

  const checklistContext = useChecklistContext();
  if (!checklistContext) {
    return <ChecklistItem item={props.item} />;
  }
  const checklistName = checklistContext.checklistMeta.slug!;

  return (
    <li className={styles.checklistLi} id={props.item.name}>
      <label htmlFor={checklistItemId} className={styles.checklistLiLabel}>
        <ChecklistItemInput id={checklistItemId} />
        <ChecklistItemLabel>
          <ChecklistItemTitle>
            {props.item.title}{" "}
            {!checklistContext.isSingleItemView && (
              <ChecklistItemLink
                checklistName={checklistName}
                checklistItemName={props.item.name}
              />
            )}
          </ChecklistItemTitle>
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
