import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxLIProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export function MdxLI({ className, children, ...restProps }: MdxLIProps) {
  return <li {...restProps}>{children}</li>;
}
