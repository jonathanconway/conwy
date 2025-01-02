import { ReactNode } from "react";

import * as styles from "./list-item-blurb.css";

interface ContentListItemBlurbProps {
  readonly children?: ReactNode;
}

export function ContentListItemBlurb(props: ContentListItemBlurbProps) {
  return <p className={styles.blurb}>{props.children}</p>;
}
