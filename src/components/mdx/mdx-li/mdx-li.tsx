import { DetailedHTMLProps, HTMLAttributes } from "react";

import "./mdx-li.css";

export type MdxLIProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export function MdxLI({ className, children, ...restProps }: MdxLIProps) {
  return <li {...restProps}>{children}</li>;
}
