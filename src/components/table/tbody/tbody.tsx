import { HTMLProps } from "react";

import * as styles from "./tbody.css";

type TBodyProps = HTMLProps<HTMLTableSectionElement>;

export function TBody(props: TBodyProps) {
  const { className = styles.tbody, ...restProps } = props;
  return <tbody className={className} {...restProps} />;
}
