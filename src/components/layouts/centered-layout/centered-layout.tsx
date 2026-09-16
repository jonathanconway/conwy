import { ReactNode } from "react";

import * as styles from "./centered-layout.css";

interface CenteredLayoutProps {
  readonly children: ReactNode;
}

export function CenteredLayout(props: CenteredLayoutProps) {
  return <div className={styles.centeredLayoutContainer}>{props.children}</div>;
}
