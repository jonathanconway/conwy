import { HTMLProps } from "react";

import * as styles from "./box.css";

type BoxProps = HTMLProps<HTMLDivElement>;

export function Box({ className, ...restProps }: BoxProps) {
  return <div className={className ?? styles.container} {...restProps}></div>;
}
