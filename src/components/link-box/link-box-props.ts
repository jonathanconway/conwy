import { LinkProps as NextLinkProps } from "next/link";
import { HTMLProps } from "react";

import { TextSize } from "../text";

import { LinkBoxSize } from "./link-box-sizes";

export interface LinkBoxProps
  extends Omit<Exclude<HTMLProps<HTMLAnchorElement>, NextLinkProps>, "size"> {
  readonly size?: LinkBoxSize;
  readonly textSize?: TextSize;
  readonly hasMaxWidth?: boolean;
}
