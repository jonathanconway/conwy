import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxDivCustomChecklistHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly level?: number;
};
