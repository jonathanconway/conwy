import { HTMLProps } from "react";

import * as styles from "./tr.css";

type TrProps = HTMLProps<HTMLTableRowElement>;

export function Tr(props: TrProps) {
  const { className = styles.tr, ...restProps } = props;
  return <tr className={className} {...restProps} />;
}
