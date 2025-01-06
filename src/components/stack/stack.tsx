import { isNumber } from "lodash";
import { ReactNode } from "react";

import { SizeRem } from "../styling";

import * as styles from "./stack.css";

interface StackProps {
  readonly direction?: "column" | "row";
  readonly gap?: SizeRem;
  readonly children: ReactNode;
}

function stringifySizeRem(gap?: SizeRem) {
  if (!gap) {
    return;
  }

  if (isNumber(gap)) {
    return `${gap}rem`;
  }

  return gap;
}

export function Stack({ direction = "column", gap, children }: StackProps) {
  return (
    <div
      className={direction === "column" ? styles.stackColumn : styles.stackRow}
      style={{
        ...(gap
          ? {
              gap: stringifySizeRem(gap),
            }
          : undefined),
      }}
    >
      {children}
    </div>
  );
}
