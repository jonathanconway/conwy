import { ReactNode } from "react";

import * as styles from "./stack.css";

interface StackProps {
  readonly children: ReactNode;
  readonly direction?: "column" | "row";
}

export function Stack({ direction = "column", children }: StackProps) {
  return (
    <div
      className={direction === "column" ? styles.stackColumn : styles.stackRow}
    >
      {children}
    </div>
  );
}
