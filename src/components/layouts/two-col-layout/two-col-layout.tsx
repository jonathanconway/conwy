"use client";

import { CSSProperties, ReactNode } from "react";

import * as styles from "./two-col-layout.css";

interface TwoColLayoutProps {
  readonly children: [ReactNode, ReactNode];
  readonly justifyContent?: CSSProperties["justifyContent"];
}

export function TwoColLayout(props: TwoColLayoutProps) {
  const { justifyContent = "center" } = props;
  return (
    <div className={styles.container} style={{ justifyContent }}>
      <div className={styles.column}>{props.children[0]}</div>
      <div className={styles.column}>{props.children[1]}</div>
    </div>
  );
}
