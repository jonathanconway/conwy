"use client";

import { useChecklistContext } from "../../checklist";
import { ListItem } from "../../list";

import {
  MdxLiChecklistItem,
  checkIsChecklistItem,
} from "./mdx-li-checklist-item";
import { MdxLiProps } from "./mdx-li-props";

export function MdxLi(props: MdxLiProps) {
  const { className, ...restProps } = props;

  const checklistContext = useChecklistContext();
  if (checklistContext) {
    if (checkIsChecklistItem(props)) {
      return <MdxLiChecklistItem>{props.children}</MdxLiChecklistItem>;
    }
  }

  return <ListItem {...restProps} />;
}
