import { CSSProperties } from "react";

import { cn, pickByNotUndefined } from "@/framework/client";
import { rems } from "@/framework/css";

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
    fill,
    ...restProps
  } = props;

  const containerDirectionClassName = {
    [StackDirections.Row]: styles.stackRow,
    [StackDirections.Column]: styles.stackColumn,
    [StackDirections.RowReverse]: styles.stackRowReverse,
    [StackDirections.ColumnReverse]: styles.stackColumnReverse,
  }[flexDirection];

  const containerDistributionClassName = {
    [StackDistributions.Flow]: styles.stackDistributionFlow,
    [StackDistributions.Even]: styles.stackDistributionEven,
  }[distribution ?? StackDistributions.Even];

  const containerFillClassName = {
    true: styles.stackFill,
    false: "",
  }[Boolean(fill).toString()];

  const containerClassName = cn(
    className,
    styles.stackBase,
    containerDirectionClassName,
    containerDistributionClassName,
    containerFillClassName,
  );

  const flex = fill ? "1" : undefined;

  const containerStyle = pickByNotUndefined({
    gap: rems(gap),
    alignItems,
    justifyContent,
    flex,
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
