import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { IconType } from "../icon";
import { TextSize } from "../text/text-size";

import { LinkContentsType } from "./link-contents-type";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly bracketedItems?: readonly string[];
  readonly icon?: IconType;
  readonly showOpenInNew?: boolean;
  readonly showOpenPopup?: boolean;
  readonly size?: TextSize;
  readonly contentsType?: LinkContentsType;
};
