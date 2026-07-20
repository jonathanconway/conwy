import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { Link as Link_ } from "@/framework/client";

import { IconType } from "../icon";
import { TextSize } from "../text/text-size";

import { LinkContentsType } from "./link-contents-type";
import { LinkLayoutType } from "./link-layout-type";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly bracketedItems?: readonly string[];
  readonly icon?: IconType;
  readonly iconSlot?: ReactNode;
  readonly showOpenInNew?: boolean;
  readonly showOpenPopup?: boolean;
  readonly size?: TextSize;
  readonly contentsType?: LinkContentsType;
  readonly layoutType?: LinkLayoutType;
  readonly link?: Link_;
};
