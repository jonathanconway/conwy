import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import { BoxSize, BoxSizes } from "./box-size";
import { BoxType, BoxTypes } from "./box-type";
import * as styles from "./box.css";

type BoxProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  readonly size?: BoxSize;
  readonly type?: BoxType;
};

const BOX_TYPE_STYLES = {
  [BoxTypes.Decorative]: styles.typeDecorative,
  [BoxTypes.Structural]: styles.typeStructural,
};

const BOX_SIZE_STYLES = {
  [BoxSizes.Medium]: styles.sizeMedium,
  [BoxSizes.Small]: styles.sizeSmall,
};

export function Box(props: BoxProps) {
  const {
    type = BoxTypes.Decorative,
    className = cn(
      BOX_TYPE_STYLES[props.type ?? BoxTypes.Decorative],
      BOX_SIZE_STYLES[props.size ?? BoxSizes.Medium],
    ),
    ...restProps
  } = props;

  return <div className={className} {...restProps} />;
}
