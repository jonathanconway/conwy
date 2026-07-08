import { ReactNode } from "react";

import * as styles from "./content-list-item-small.css";

export interface ContentListItemSmallProps {
  readonly mainSlot?: ReactNode;
  readonly asideSlot?: ReactNode;
}

export function ContentListItemSmall(props: ContentListItemSmallProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>{props.mainSlot}</div>
      {props.asideSlot && (
        <div className={styles.asideColumn}>{props.asideSlot}</div>
      )}
    </div>
  );
}
