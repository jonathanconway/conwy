import { MdxWrapper } from "../mdx-wrapper";

import { MdxTBodyProps } from "./mdx-tbody-props";

export function MdxTBody({ children, ...restProps }: MdxTBodyProps) {
  return (
    <tbody {...restProps}>
      <MdxWrapper>{children}</MdxWrapper>
    </tbody>
  );
}
