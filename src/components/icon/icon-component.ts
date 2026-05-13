import { JSX } from "react";

import { IconEmojiProps } from "./icon-emoji-props";
import { SvgProps } from "./icon-svg-props";

export type IconComponent =
  | ((props: SvgProps) => JSX.Element)
  | ((props: IconEmojiProps) => JSX.Element);
