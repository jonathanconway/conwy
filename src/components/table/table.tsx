import { HTMLProps } from "react";

import * as styles from "./table.css";

type TableProps = HTMLProps<HTMLTableElement>;

export function Table({ className, ...restProps }: TableProps) {
  return <table className={className ?? styles.table} {...restProps}></table>;
}
