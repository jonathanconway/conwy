"use client";

import { cn } from "@/framework/client";

import { ButtonAppearances } from "./button-appearance";
import { ButtonProps } from "./button-props";
import * as styles from "./button.css";

export function Button(props: ButtonProps) {
  const {
    className = cn(
      {
        [ButtonAppearances.Regular]: styles.buttonBase,
        [ButtonAppearances.None]: styles.buttonBaseNone,
      }[props.appearance ?? ButtonAppearances.Regular],
      props.selected ? styles.buttonSelected : styles.buttonUnselected,
    ),
    selected,
    type,
    ...restProps
  } = props;

  return (
    <button
      type={type as HTMLButtonElement["type"]}
      className={className}
      {...restProps}
    />
  );
}
