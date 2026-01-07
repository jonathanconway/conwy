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

export function Box(props: BoxProps) {
  const {
    type = BoxTypes.Decorative,
    className = BOX_TYPE_STYLES[props.type ?? BoxTypes.Decorative],
    ...restProps
  } = props;

  return <div className={className} {...restProps} />;
}
