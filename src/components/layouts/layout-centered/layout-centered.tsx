import { ReactNode } from "react";

import * as styles from "./layout-centered.css";

interface LayoutCenteredProps {
  readonly children: ReactNode;
}

export function LayoutCentered(props: LayoutCenteredProps) {
  return <div className={styles.centeredLayoutContainer}>{props.children}</div>;
}
