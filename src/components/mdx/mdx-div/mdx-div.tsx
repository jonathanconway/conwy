"use client";

import { MdxDivProps } from "./mdx-div-props";
import * as styles from "./mdx-div.css";

export function MdxDiv(props: MdxDivProps) {
  return <div className={styles.div} {...props} />;
}
