import { ReactNode } from "react";

import { MdxLiProps } from "../mdx-li-props";

import { MdxLiChecklistItemClient } from "./mdx-li-checklist-item-client";
import { selectChecklistItemProps } from "./mdx-li-checklist-item.utils";

export function MdxLiChecklistItem(props: MdxLiProps) {
  const sectionItem = selectChecklistItemProps(
    (props.children ?? []) as ReactNode[],
  );
  if (!sectionItem) {
    return null;
  }

  return <MdxLiChecklistItemClient sectionItem={sectionItem} />;
}
