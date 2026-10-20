import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Tr } from "../../table";

export type MdxTrProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export function MdxTr(props: MdxTrProps) {
  return <Tr {...props} />;
}
