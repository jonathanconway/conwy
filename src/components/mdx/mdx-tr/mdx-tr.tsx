import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxWrapper } from "../mdx-wrapper";

export type MdxTrProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export function MdxTr({ children, ...restProps }: MdxTrProps) {
  return (
    <tr {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </tr>
  );
}
