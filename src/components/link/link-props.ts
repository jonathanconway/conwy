import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

import { Link as Link_ } from "@/framework";

import { IconType } from "../icon";

import { LinkAppearance } from "./link-appearance";
import { LinkContentsType } from "./link-contents-type";
import { LinkLayoutType } from "./link-layout-type";
import { LinkSize } from "./link-size";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly classNameExtended?: HTMLAttributes<HTMLAnchorElement>["className"];
  readonly bracketedItems?: readonly string[];
  readonly icon?: IconType;
  readonly iconSlot?: ReactNode;
  readonly showOpenInNew?: boolean;
  readonly showOpenPopup?: boolean;
  readonly size?: LinkSize;
  readonly contentsType?: LinkContentsType;
  readonly layoutType?: LinkLayoutType;
  readonly link?: Link_;
  readonly layoutInnerContents?: boolean;
  readonly appearance?: LinkAppearance;
};
