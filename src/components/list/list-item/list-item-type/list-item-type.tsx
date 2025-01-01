import { ReactNode } from "react";

import * as styles from "./list-item-type.css";

interface ListItemTypeProps {
  readonly children?: ReactNode;
}

export function ListItemType(props: ListItemTypeProps) {
  return <span className={styles.type}>{props.children}</span>;
}
