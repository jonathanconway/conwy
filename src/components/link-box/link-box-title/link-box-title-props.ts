import { HTMLProps } from "react";

import { LinkBoxTitleSize } from "./link-box-title-sizes";

export type LinkBoxTitleProps = Omit<HTMLProps<HTMLSpanElement>, "size"> & {
  readonly size?: LinkBoxTitleSize;
};
