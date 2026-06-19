"use client";

import { ChecklistItem, useChecklistContext } from "../../../checklist";

import { MdxLiChecklistItemClientProps } from "./mdx-li-checklist-item-client-props";

export function MdxLiChecklistItemClient(props: MdxLiChecklistItemClientProps) {
  const { sectionItem } = props;

  const checklistContext = useChecklistContext();

  if (checklistContext) {
    if (
      !checklistContext.checklistMeta.extensions?.itemsByName[sectionItem.name]
    ) {
      return;
    }
  }
  return <ChecklistItem item={sectionItem} />;
}
