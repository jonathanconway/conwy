import { isNumber } from "lodash";
import { CSSProperties } from "react";

import { cn, pickByNotUndefined } from "@/framework/client";

import { SizeRem } from "../styling";

import { StackDirections } from "./stack-direction";
import { StackDistributions } from "./stack-distribution";
import { StackProps } from "./stack-props";
import * as styles from "./stack.css";

export function Stack(props: StackProps) {
  const {
    className,
    direction: flexDirection = StackDirections.Column,
    justifyContent,
    alignItems = getAlignItemsDefault(props),
    distribution,
    gap,
    children,
    ...restProps
  } = props;

  const containerDirectionClassName = {
    [StackDirections.Row]: styles.stackRow,
    [StackDirections.Column]: styles.stackColumn,
    [StackDirections.RowReverse]: styles.stackRowReverse,
    [StackDirections.ColumnReverse]: styles.stackColumnReverse,
  }[flexDirection];

  const containerClassName = cn(
    className,
    styles.stackBase,
    containerDirectionClassName,
    distribution === StackDistributions.Flow
      ? styles.stackDistributionFlow
      : styles.stackDistributionEven,
  );

  const containerStyle = pickByNotUndefined({
    gap: stringifySizeRem(gap),
    alignItems,
    justifyContent,
  });

  return (
    <div className={containerClassName} style={containerStyle} {...restProps}>
      {children}
    </div>
  );
}

function getAlignItemsDefault(props: StackProps): CSSProperties["alignItems"] {
  if (props.direction === "row" || props.direction === "row-reverse") {
    return "center";
  }
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
