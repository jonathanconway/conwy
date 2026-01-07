import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TextType } from "./text-type";

export type TextProps<T extends HTMLElement = HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
> &
  TextStyleProps & {
    readonly as?: React.HTMLElementType;
  };

export interface TextStyleProps {
  readonly type?: TextType;
}
