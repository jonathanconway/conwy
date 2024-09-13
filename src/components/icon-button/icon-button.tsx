import { cn } from "@jonathanconway/tailwindjs";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { Icon } from "../icon/icon";
import { IconType } from "../icon/icon-types";
import { withTooltip } from "../tooltip";

import * as styles from "./icon-button.styles";

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  readonly icon?: IconType;
  readonly isSelected?: boolean;
}

function IconButton_(props: IconButtonProps) {
  const { className, icon, isSelected, ...restProps } = props;

  return (
    <button
      className={cn(styles.iconButton(props), props.className ?? "")}
      {...restProps}
    >
      {props.icon && (
        <Icon className={styles.icon(props)} icon={props.icon} size="100%" />
      )}
    </button>
  );
}

export const IconButton = withTooltip(IconButton_);
