import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

import { TextType } from "./text-type";

export type TextProps<T extends HTMLElement = HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
> &
  TextStyleProps & {
    readonly as?: React.HTMLElementType;
    readonly textAlign?: CSSProperties["textAlign"];
    readonly styleInner?: boolean;
  };

export interface TextStyleProps {
  readonly type?: TextType;
}
