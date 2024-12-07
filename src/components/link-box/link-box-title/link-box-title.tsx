import { HTMLProps } from "react";

import * as styles from "./link-box-title.styles";

interface LinkBoxTitleProps extends HTMLProps<HTMLSpanElement> {}

export function LinkBoxTitle(props: LinkBoxTitleProps) {
  const { className, ...restProps } = props;
  return (
    <span className={props.className ?? styles.linkBoxTitle} {...restProps} />
  );
}
