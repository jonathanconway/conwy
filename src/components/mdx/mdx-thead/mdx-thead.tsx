import { DetailedHTMLProps, HTMLAttributes } from "react";

import { THead } from "../../table";

export type MdxTHeadProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export function MdxTHead(props: MdxTHeadProps) {
  return <THead {...props} />;
}
