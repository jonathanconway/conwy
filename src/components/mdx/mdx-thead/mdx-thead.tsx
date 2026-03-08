import { DetailedHTMLProps, HTMLAttributes } from "react";

import { MdxWrapper } from "../mdx-wrapper";

export type MdxTHeadProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export function MdxTHead({ children, ...restProps }: MdxTHeadProps) {
  return (
    <thead {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </thead>
  );
}
