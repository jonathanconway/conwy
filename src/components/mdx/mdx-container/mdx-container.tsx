import { ReactNode } from "react";

import * as styles from "./mdx-container.css";

interface MdxContainerProps {
  readonly children: ReactNode;
}

export function MdxContainer(props: MdxContainerProps) {
  return <div className={styles.mdx}>{props.children}</div>;
}
