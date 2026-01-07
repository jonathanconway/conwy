import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Table } from "../../table";

import "./mdx-table.css";

export type MdxTableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export function MdxTable({ children, ...restProps }: MdxTableProps) {
  return <Table {...restProps}>{children}</Table>;
}
