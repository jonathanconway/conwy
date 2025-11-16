import { LinkProps as NextLinkProps } from "next/link";
import { HTMLProps } from "react";

import { TextSize } from "../text";

export interface LinkBoxProps
  extends Omit<Exclude<HTMLProps<HTMLAnchorElement>, NextLinkProps>, "size"> {
  readonly size?: TextSize;
}
