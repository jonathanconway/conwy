import { ReactNode } from "react";

import * as styles from "./content-list.css";

export interface ContentListProps {
  readonly children?: ReactNode;
}

export function ContentList(props: ContentListProps) {
  return <div className={styles.container}>{props.children}</div>;
}
