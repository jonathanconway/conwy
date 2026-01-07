import { withTooltip } from "../tooltip";

import { IconProps } from "./icon-props";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import * as styles from "./icon.css";

const DEFAULT_SIZE = "1rem";

function Icon_(props: IconProps) {
  const IconSvg = ICON_TYPE_SVGS[props.icon];

  const { className = styles.iconContainer } = props;

  return (
    /*
      Explanation:
        - id needs to be on the container for the tooltip to activate.
        - className needs to be on the container for the hover colours to be applied.
    */
    <span
      id={props.id}
      className={className}
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
