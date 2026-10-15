import { Table } from "../../table";

import { MdxTableProps } from "./mdx-table-props";

export function MdxTable({ children, ...restProps }: MdxTableProps) {
  return <Table {...restProps}>{children}</Table>;
}
