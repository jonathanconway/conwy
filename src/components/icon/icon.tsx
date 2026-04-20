import { withTooltip } from "../tooltip";

import { IconProps } from "./icon-props";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import * as styles from "./icon.css";

const DEFAULT_SIZE = "1rem";

function Icon_(props: IconProps) {
  const {
    icon,
    className = styles.iconContainer,
    id,
    size,
    ...restProps
  } = props;
  const IconSvg = ICON_TYPE_SVGS[icon];

  return (
    /*
      Explanation:
        - id needs to be on the container for the tooltip to activate.
        - className needs to be on the container for the hover colours to be applied.
    */
    <span
      id={id}
      className={className}
      style={{
        width: size ?? DEFAULT_SIZE,
        height: size ?? DEFAULT_SIZE,
      }}
      {...restProps}
    >
      <IconSvg className={styles.iconSvg} icon={icon} />

      {/* Explanation: Overlay needs to absorb mouse events for tooltip and hover effects to work simultaneously. */}
      <span className={styles.iconOverlay}></span>
    </span>
  );
}

export const Icon = withTooltip(Icon_);
