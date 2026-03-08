import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxWrapper } from "../mdx-wrapper";

export type MdxTBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export function MdxTBody({ children, ...restProps }: MdxTBodyProps) {
  return (
    <tbody {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </tbody>
  );
}
