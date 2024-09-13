import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxULProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export function MdxUL({ className, children, ...restProps }: MdxULProps) {
  return <ul {...restProps}>{children}</ul>;
}
