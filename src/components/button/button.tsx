import { HTMLProps } from "react";

import * as styles from "./button.styles";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly isSelected?: boolean;
};

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type={props.type as HTMLButtonElement["type"]}
      className={styles.button(props.selected)}
    />
  );
}
