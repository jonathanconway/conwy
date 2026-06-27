"use client";

import { ChecklistItem, useChecklistContext } from "../../../checklist";

import { MdxLiChecklistItemClientProps } from "./mdx-li-checklist-item-client-props";

export function MdxLiChecklistItemClient(props: MdxLiChecklistItemClientProps) {
  const { sectionItem } = props;

  const checklistContext = useChecklistContext();

  if (
    !checklistContext?.checklistMeta.extensions?.itemsByName[sectionItem.name]
  ) {
    if (
      [
        "use-css-containment-to-limit-the-scope-of-layout-and",
        "use-css-scrolldriven-animations",
      ].includes(sectionItem.name)
    ) {
      console.log("<MdxLiChecklistItemClient> 1", props.sectionItem);
      console.log(
        "<MdxLiChecklistItemClient> 2",
        checklistContext?.checklistMeta.extensions?.itemsByName,
      );
    }
    // return <>notfound {props.sectionItem.name}</>;
    return;
  }

  return <ChecklistItem item={sectionItem} />;
}
