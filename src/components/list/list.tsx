import { ReactNode } from "react";

import * as styles from "./list.css";

export interface ListProps {
  readonly children?: ReactNode;
}

export function List(props: ListProps) {
  return <div className={styles.container}>{props.children}</div>;
}
