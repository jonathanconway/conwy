import { HTMLProps } from "react";

import * as styles from "./link-box-title.css";

interface LinkBoxTitleProps extends HTMLProps<HTMLSpanElement> {}

export function LinkBoxTitle(props: LinkBoxTitleProps) {
  const { className = styles.linkBoxTitle, ...restProps } = props;

  return <span className={className} {...restProps} />;
}
