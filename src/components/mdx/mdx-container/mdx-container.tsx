import { ReactNode } from "react";

import * as styles from "./mdx-container.css";

export function MdxContainer(props: { readonly children: ReactNode }) {
  return <div className={styles.mdx}>{props.children}</div>;
}
