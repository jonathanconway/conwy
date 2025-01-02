import { ReactNode } from "react";

import * as styles from "./content-list-item.css";

export interface ContentListItemProps {
  readonly mainSlot?: ReactNode;
  readonly asideSlot?: ReactNode;
}

export function ContentListItem(props: ContentListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>{props.mainSlot}</div>
      {props.asideSlot && (
        <div className={styles.asideColumn}>{props.asideSlot}</div>
      )}
    </div>
  );
}
