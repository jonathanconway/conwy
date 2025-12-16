import { FC } from "react";

import { cn } from "@/framework/client";

// import { IconProps } from "./icon-props";
// import { SVG_PROPS_COMMON } from "./icon-svg-props";
// import * as styles from "./icon.css";
import { IllustrationProps } from "./illustration-props";

export function withSvgIllustration(SvgIcon: FC<IllustrationProps>) {
  return function Icon({ className, ...restProps }: IllustrationProps) {
    return (
      <svg
        className={className}
        viewBox="0 0 576 512"
        focusable="false"
        aria-hidden="true"
      >
        <SvgIcon {...restProps} />
      </svg>
    );
  };
}
