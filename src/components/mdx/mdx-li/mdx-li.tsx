"use client";

import { isArray, isObject } from "lodash";

import { useChecklistContext } from "../../checklist";

import {
  MdxLiChecklistItem,
  checkIsChecklistItem,
} from "./mdx-li-checklist-item";
import { MdxLiProps } from "./mdx-li-props";
import * as styles from "./mdx-li.css";

export function MdxLi(props: MdxLiProps) {
  const { className, ...restProps } = props;

  // if (
  //   isArray(props.children) &&
  //   isObject(props.children[0]) &&
  //   "props" in props.children[0] &&
  //   isObject(props.children[0].props) &&
  //   "type" in props.children[0].props &&
  //   props.children[0].props.type === "checkbox"
  // ) {
  //   return <li>checkbox</li>;
  // }
  // console.log(props.children);
  const checklistContext = useChecklistContext();
  // todo: match it up to extensions item
  if (checklistContext) {
    // if (checkIsChecklistItem(props)) {
    return <MdxLiChecklistItem>{props.children}</MdxLiChecklistItem>;
    // }
  }

  return <li className={styles.li} {...restProps} />;
}
