import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TextSpacingStrategy } from "./text-spacing";
import { TextType } from "./text-type";

export type TextProps<T extends HTMLElement = HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
> &
  TextStyleProps & {
    readonly as?: React.HTMLElementType;
    readonly classNameExtended?: HTMLAttributes<HTMLElement>["className"];
    readonly spacingStrategy?: TextSpacingStrategy;
  };

export interface TextStyleProps {
  readonly type?: TextType;
}
