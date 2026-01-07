import { HTMLProps } from "react";

import * as styles from "./table.css";

type TableProps = HTMLProps<HTMLTableElement>;

export function Table(props: TableProps) {
  const { className = styles.table, ...restProps } = props;
  return <table className={className} {...restProps}></table>;
}
