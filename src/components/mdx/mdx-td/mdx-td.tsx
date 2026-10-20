import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Td } from "../../table";

export type MdxTdProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function MdxTd(props: MdxTdProps) {
  return <Td {...props} />;
}
