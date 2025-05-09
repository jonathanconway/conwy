import { cn } from "@/framework/client";

import { withTooltip } from "../tooltip";

import { IconProps } from "./icon-props";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import * as styles from "./icon.css";

export const DEFAULT_SIZE = "1rem";

export function Icon_(props: IconProps) {
  const IconSvg = ICON_TYPE_SVGS[props.icon];

  const { id, className, size, ...restProps } = props;

  return (
    /*
      Explanation:
        - id needs to be on the container for the tooltip to activate.
        - className needs to be on the container for the hover colours to be applied.
    */
    <span
      id={props.id}
      className={cn(styles.iconContainer, props.className ?? "")}
      style={{
        width: props.size ?? DEFAULT_SIZE,
        height: props.size ?? DEFAULT_SIZE,
      }}
    >
      <IconSvg className={styles.iconSvg} icon={props.icon} />

      {/* Explanation: Overlay needs to absorb mouse events for tooltip and hover effects to work simultaneously. */}
      <span className={styles.iconOverlay}></span>
    </span>
  );
}

export const Icon = withTooltip(Icon_);
