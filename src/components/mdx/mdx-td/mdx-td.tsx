import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxWrapper } from "../mdx-wrapper";

export type MdxTdProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function MdxTd({ children, ...restProps }: MdxTdProps) {
  return (
    <td {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </td>
  );
}
