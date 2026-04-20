"use client";

import { useMdxDivCustomChecklistContext } from "../mdx-div";

import {
  MdxLiChecklistItem,
  checkIsChecklistItem,
} from "./mdx-li-checklist-item";
import { MdxLiProps } from "./mdx-li-props";
import * as styles from "./mdx-li.css";

export function MdxLi(props: MdxLiProps) {
  const { className, ...restProps } = props;

  const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  if (mdxDivCustomChecklistContext && checkIsChecklistItem(props)) {
    return <MdxLiChecklistItem>{props.children}</MdxLiChecklistItem>;
  }

  return <li className={styles.li} {...restProps} />;
}
