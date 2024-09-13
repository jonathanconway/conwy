import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxPProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function MdxP({ className, children, ...restProps }: MdxPProps) {
  return <p {...restProps}>{children}</p>;
}
