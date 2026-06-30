import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ChecklistItemInputProps = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  readonly disabled?: boolean;
};
