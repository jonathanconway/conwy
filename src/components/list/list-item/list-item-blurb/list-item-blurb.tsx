import { ReactNode } from "react";

import * as styles from "./list-item-blurb.css";

interface ListItemBlurbProps {
  readonly children?: ReactNode;
}

export function ListItemBlurb(props: ListItemBlurbProps) {
  return <p className={styles.blurb}>{props.children}</p>;
}
