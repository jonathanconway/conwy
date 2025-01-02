import { HTMLProps } from "react";

import { BoxType, BoxTypes } from "./box-type";
import * as styles from "./box.css";

type BoxProps = HTMLProps<HTMLDivElement> & {
  readonly type?: BoxType;
};

const BOX_TYPE_STYLES = {
  [BoxTypes.Decorative]: styles.decorative,
  [BoxTypes.Structural]: styles.structural,
};

export function Box({
  className,
  type = BoxTypes.Decorative,
  ...restProps
}: BoxProps) {
  return (
    <div className={className ?? BOX_TYPE_STYLES[type]} {...restProps}></div>
  );
}
