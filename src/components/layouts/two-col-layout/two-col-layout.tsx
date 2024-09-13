import { ReactNode } from "react";

import * as styles from "./two-col-layout.styles";

interface TwoColLayoutProps {
  readonly children: [ReactNode, ReactNode];
}

export function TwoColLayout(props: TwoColLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.column}>{props.children[0]}</div>
      <div className={styles.column}>{props.children[1]}</div>
    </div>
  );
}
