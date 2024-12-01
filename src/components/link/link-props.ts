import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import { IconType } from "../icon";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly bracketedItems?: readonly string[];
  readonly icon?: IconType;
  readonly showOpenInNew?: boolean;
  readonly showOpenPopup?: boolean;
};
