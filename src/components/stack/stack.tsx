import { isNumber } from "lodash";

import { cn } from "@/framework/client";

import { SizeRem } from "../styling";

import { StackDirections } from "./stack-direction";
import { StackDistributions } from "./stack-distribution";
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
  const { direction = "column", distribution, gap, children } = props;

  const className = cn(
    props.className,
    styles.stackBase,
    direction === StackDirections.Column ? styles.stackColumn : styles.stackRow,
    distribution === StackDistributions.Flow
      ? styles.stackDistributionFlow
      : styles.stackDistributionEven,
  );

  return (
    <div
      className={className}
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
