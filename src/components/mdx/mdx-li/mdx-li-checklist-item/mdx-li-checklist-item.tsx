"use client";

import { isArray } from "lodash";

import { useChecklistContext } from "@/components/checklist";

import { MdxLiProps } from "../mdx-li-props";

import { MdxLiChecklistItemClient } from "./mdx-li-checklist-item-client";
import { selectChecklistItemProps } from "./mdx-li-checklist-item.utils";

export function MdxLiChecklistItem(props: MdxLiProps) {
  const checklistContext = useChecklistContext();
  if (!checklistContext) {
    return;
  }

  if (!props.children || !isArray(props.children)) {
    console.log("<MdxLiChecklistItem> 1", props);
    return;
  }

  const sectionItem = selectChecklistItemProps(
    checklistContext.checklistMeta,
    props.children,
  );
  if (!sectionItem) {
    console.log("<MdxLiChecklistItem> 2", sectionItem);
    return;
  }

  return <MdxLiChecklistItemClient sectionItem={sectionItem} />;
}
