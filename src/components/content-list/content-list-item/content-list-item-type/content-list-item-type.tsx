import { ReactNode } from "react";

import * as styles from "./content-list-item-type.css";

interface ContentListItemTypeProps {
  readonly children?: ReactNode;
}

export function ContentListItemType(props: ContentListItemTypeProps) {
  return <span className={styles.type}>{props.children}</span>;
}
