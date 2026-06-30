import { FC } from "react";

import { IconProps } from "./icon-props";
import { SVG_PROPS_COMMON, SvgProps } from "./icon-svg-props";
import * as styles from "./icon.css";

export function withSvgIcon(SvgIcon: FC<SvgProps>) {
  return function Icon(props: SvgProps) {
    const { className = styles.iconSvg, ...restProps } = props;

    return (
      <SvgIcon
        className={className}
        {...SVG_PROPS_COMMON}
        {...(restProps as any)}
      />
    );
  };
}
