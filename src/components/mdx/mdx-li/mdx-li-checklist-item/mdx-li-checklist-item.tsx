"use client";

import { isArray } from "lodash";

import { useChecklistContext } from "../../../checklist/checklist-context";
import { MdxLiProps } from "../mdx-li-props";

import { MdxLiChecklistItemClient } from "./mdx-li-checklist-item-client";
import { selectChecklistItemProps } from "./mdx-li-checklist-item.utils";

export function MdxLiChecklistItem(props: MdxLiProps) {
  const checklistContext = useChecklistContext();
  if (!checklistContext) {
    return;
  }

  if (!props.children || !isArray(props.children)) {
    return;
  }

  const sectionItem = selectChecklistItemProps(
    checklistContext.checklistMeta,
    props.children,
  );
  if (!sectionItem) {
    return;
  }

  return <MdxLiChecklistItemClient sectionItem={sectionItem} />;
}
