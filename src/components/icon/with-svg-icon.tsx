import { FC } from "react";

import { cn } from "@/framework/client";

import { IconProps } from "./icon-props";
import { SVG_PROPS_COMMON } from "./icon-svg-props";
import * as styles from "./icon.styles";

export function withSvgIcon(SvgIcon: FC<IconProps>) {
  return function Icon({ className, ...restProps }: IconProps) {
    return (
      <SvgIcon
        className={cn(className, styles.iconSvg)}
        {...SVG_PROPS_COMMON}
        {...restProps}
      />
    );
  };
}
