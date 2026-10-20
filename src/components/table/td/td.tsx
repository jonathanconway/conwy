import { HTMLProps } from "react";

import * as styles from "./td.css";

type TdProps = HTMLProps<HTMLTableCellElement>;

export function Td(props: TdProps) {
  const { className = styles.td, ...restProps } = props;
  return <td className={className} {...restProps} />;
}
