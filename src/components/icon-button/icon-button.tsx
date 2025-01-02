import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { cn } from "@/framework/client";

import { Icon } from "../icon/icon";
import { IconType } from "../icon/icon-types";
import { withTooltip } from "../tooltip";

import * as styles from "./icon-button.css";

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  readonly size?: string;
  readonly icon?: IconType;
  readonly isSelected?: boolean;
}

function IconButton_(props: IconButtonProps) {
  const { className, icon, isSelected, ...restProps } = props;

  return (
    <button
      className={
        props.className ??
        cn(
          styles.iconButtonBase,
          props.isSelected
            ? styles.iconButtonSelected
            : styles.iconButtonUnselected,
          props.disabled ? styles.iconButtonDisabled : undefined,
        )
      }
      {...restProps}
    >
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
