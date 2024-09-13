import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxOLProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export function MdxOL({ className, children, ...restProps }: MdxOLProps) {
  return <ol {...restProps}>{children}</ol>;
}
