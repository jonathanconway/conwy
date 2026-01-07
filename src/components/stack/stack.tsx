import { isNumber } from "lodash";

import { cn } from "@/framework/client";

import { SizeRem } from "../styling";

import { StackProps } from "./stack-props";
import * as styles from "./stack.css";

function stringifySizeRem(gap?: SizeRem) {
  if (!gap) {
    return;
  }

  if (isNumber(gap)) {
    return `${gap}rem`;
  }

  return gap;
}

export function Stack(props: StackProps) {
  const { direction = "column", gap, children } = props;

  return (
    <div
      className={cn(
        styles.stackBase,
        direction === "column" ? styles.stackColumn : styles.stackRow,
      )}
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
