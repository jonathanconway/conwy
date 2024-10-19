import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { IconType } from "../icon";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly showOpenInNew?: boolean;
  readonly bracketedItems?: readonly string[];
  readonly icon?: IconType;
};
