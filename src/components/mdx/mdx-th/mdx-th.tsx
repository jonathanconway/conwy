import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxWrapper } from "../mdx-wrapper";

export type MdxThProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export function MdxTh({ children, ...restProps }: MdxThProps) {
  return (
    <th {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </th>
  );
}
