import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import * as styles from "./button.css";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly isSelected?: boolean;
};

export function Button(props: ButtonProps) {
  const {
    className = cn(
      styles.buttonBase,
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
