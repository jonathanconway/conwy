import { HTMLProps } from "react";

import { IconType } from "./icon-types";

export type IconProps = Omit<HTMLProps<HTMLSpanElement>, "size"> & {
  readonly icon: IconType;
  readonly size?: string;
  readonly color?: string;
};
