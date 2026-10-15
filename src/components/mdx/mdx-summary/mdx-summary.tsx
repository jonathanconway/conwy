"use client";

import { HTMLProps } from "react";

import * as styles from "./mdx-summary.css";

export type MdxSummaryProps = HTMLProps<HTMLDetailsElement>;

export function MdxSummary(props: MdxSummaryProps) {
  return <summary className={styles.summary} {...props} />;
}
