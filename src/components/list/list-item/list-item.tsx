import { ReactNode } from "react";

import * as styles from "./list-item.css";

export interface ListItemProps {
  readonly mainSlot?: ReactNode;
  readonly asideSlot?: ReactNode;
}

export function ListItem(props: ListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>{props.mainSlot}</div>
      {props.asideSlot && (
        <div className={styles.asideColumn}>{props.asideSlot}</div>
      )}
    </div>
  );
}
