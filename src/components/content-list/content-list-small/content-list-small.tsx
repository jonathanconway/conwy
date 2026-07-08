import { ReactNode } from "react";

import * as styles from "./content-list-small.css";

export interface ContentListSmallProps {
  readonly children?: ReactNode;
}

export function ContentListSmall(props: ContentListSmallProps) {
  return <div className={styles.container}>{props.children}</div>;
}
