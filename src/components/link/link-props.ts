import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  readonly showOpenInNew?: boolean;
  readonly bracketedItems?: readonly string[];
};
