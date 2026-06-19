"use client";

import { useChecklistContext } from "../../checklist";

import {
  MdxLiChecklistItem,
  checkIsChecklistItem,
} from "./mdx-li-checklist-item";
import { MdxLiProps } from "./mdx-li-props";
import * as styles from "./mdx-li.css";

export function MdxLi(props: MdxLiProps) {
  const { className, ...restProps } = props;

  const checklistContext = useChecklistContext();
  // todo: match it up to extensions item
  if (checklistContext && checkIsChecklistItem(props)) {
    return <MdxLiChecklistItem>{props.children}</MdxLiChecklistItem>;
  }

  return <li className={styles.li} {...restProps} />;
}
