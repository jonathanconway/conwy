import { SvgIconProps } from "@mui/material";

import { SvgProps } from "./icon-svg-props";
import { IconType } from "./icon-types";

export type IconProps = (SvgProps | SvgIconProps) & {
  readonly icon: IconType;
  readonly size?: string;
  readonly color?: string;
};
