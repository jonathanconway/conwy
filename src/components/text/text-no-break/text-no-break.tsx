import { ReactNode } from "react";

import * as styles from "./text-no-break.css";

interface TextNoBreakProps {
  readonly children?: ReactNode;
}

export function TextNoBreak(props: TextNoBreakProps) {
  return <span className={styles.textNoBreak}>{props.children}</span>;
}
