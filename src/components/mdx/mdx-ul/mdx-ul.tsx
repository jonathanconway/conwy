"use client";

import { useMdxDivCustomChecklistContext } from "../mdx-div";

import { MdxUlChecklist, checkIsChecklist } from "./mdx-ul-checklist";
import { MdxUlProps } from "./mdx-ul-props";
import * as styles from "./mdx-ul.css";

export function MdxUl(props: MdxUlProps) {
  const { className, ...restProps } = props;

  const mdxDivCustomChecklist = useMdxDivCustomChecklistContext();
  if (mdxDivCustomChecklist && checkIsChecklist(props)) {
    return <MdxUlChecklist>{props.children}</MdxUlChecklist>;
  }

  return <ul className={styles.ul} {...restProps} />;
}
