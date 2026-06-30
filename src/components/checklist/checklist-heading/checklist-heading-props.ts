import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ChecklistHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  readonly level?: number;
};
