import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MdxPProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  readonly noteId?: string;
};
