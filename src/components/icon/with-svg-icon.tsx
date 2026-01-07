import { FC } from "react";

import { IconProps } from "./icon-props";
import { SVG_PROPS_COMMON } from "./icon-svg-props";
import * as styles from "./icon.css";

export function withSvgIcon(SvgIcon: FC<IconProps>) {
  return function Icon(props: IconProps) {
    const { className = styles.iconSvg, ...restProps } = props;

    return (
      <SvgIcon className={className} {...SVG_PROPS_COMMON} {...restProps} />
    );
  };
}
