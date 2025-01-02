import { HTMLProps } from "react";

import { cn } from "@/framework/client";

import * as styles from "./button.css";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly isSelected?: boolean;
};

export function Button({ selected, type, ...restProps }: ButtonProps) {
  return (
    <button
      {...restProps}
      type={type as HTMLButtonElement["type"]}
      className={cn(
        styles.buttonBase,
        selected ? styles.buttonSelected : styles.buttonUnselected,
      )}
    />
  );
}
