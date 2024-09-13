import { cn } from "@jonathanconway/tailwindjs";

import { withTooltip } from "../tooltip";

import { SvgProps } from "./icon-svg-props";
import { IconType } from "./icon-types";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import * as styles from "./icon.styles";

export interface IconProps extends SvgProps {
  readonly icon: IconType;
  readonly size?: string;
}

export function Icon_(props: IconProps) {
  const IconSvg = ICON_TYPE_SVGS[props.icon];

  const { id, className, size, ...restProps } = props;

  return (
    /*
      Explanation:
        - id needs to be on the container for the tooltip to activate.
        - className needs to be on the container for the hover colours to be applied.
    */
    <div
      id={props.id}
      className={cn(styles.iconContainer, props.className ?? "")}
      style={{
        width: props.size ?? styles.DEFAULT_SIZE,
        height: props.size ?? styles.DEFAULT_SIZE,
      }}
    >
      <IconSvg className={styles.iconSvg} {...restProps} />

      {/* Explanation: Overlay needs to absorb mouse events for tooltip and hover effects to work simultaneously. */}
      <span className={styles.iconOverlay}></span>
    </div>
  );
}

export const Icon = withTooltip(Icon_);
