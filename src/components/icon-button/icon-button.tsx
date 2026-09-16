import { cn } from "@/framework/client";

import { ButtonAppearances } from "../button/button-appearance";
import { Icon } from "../icon/icon";
import { withTooltip } from "../tooltip";

import { IconButtonProps } from "./icon-button-props";
import * as styles from "./icon-button.css";

function IconButton_(props: IconButtonProps) {
  const { appearance = ButtonAppearances.Regular } = props;
  const buttonClassNameDefault = cn(
    styles.iconButtonBase,
    {
      [ButtonAppearances.Regular]: styles.iconButtonAppearanceRegular,
      [ButtonAppearances.None]: styles.iconButtonAppearanceNone,
    }[appearance],
    {
      [ButtonAppearances.Regular]: props.isSelected
        ? styles.iconButtonSelected
        : styles.iconButtonUnselected,
      [ButtonAppearances.None]: undefined,
    }[appearance],
    props.disabled ? styles.iconButtonDisabled : undefined,
  );

  const {
    className = buttonClassNameDefault,
    icon,
    isSelected,
    ...restProps
  } = props;

  return (
    <button className={className} {...restProps}>
      {props.icon && (
        <Icon
          className={cn(
            styles.icon,
            props.disabled ? styles.iconButtonIconDisabled : null,
          )}
          icon={props.icon}
          size={props.size ?? "100%"}
        />
      )}
    </button>
  );
}

export const IconButton = withTooltip(IconButton_);
