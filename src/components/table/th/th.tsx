import { HTMLProps } from "react";

import * as styles from "./th.css";

type ThProps = HTMLProps<HTMLTableCellElement>;

export function Th(props: ThProps) {
  const { className = styles.th, ...restProps } = props;

  return <th className={className} {...restProps} />;
}
