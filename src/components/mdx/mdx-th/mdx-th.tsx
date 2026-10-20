import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Th } from "../../table";

export type MdxThProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function MdxTh(props: MdxThProps) {
  return <Th {...props} />;
}
