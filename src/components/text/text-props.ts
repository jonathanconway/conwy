import { ElementType, HTMLAttributes } from "react";

import { TextType } from "./text-type";

export type TextProps = HTMLAttributes<ElementType> &
  TextStyleProps & {
    readonly as?: string;
  };

export interface TextStyleProps {
  readonly type?: TextType;
}
