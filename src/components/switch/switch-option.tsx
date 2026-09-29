import { MouseEventHandler, useId } from "react";

import { cn } from "@/framework/client";

import * as focusOutlineStyles from "../focus-outline/focus-outline.css";

import * as styles from "./switch-option.css";
import { SwitchOption as SwitchOption_ } from "./switch.types";

type SwitchOptionProps = SwitchOption_ & {
  readonly name: string;
  readonly defaultChecked: boolean;

  readonly onClick?: MouseEventHandler;
};

export function SwitchOption(props: SwitchOptionProps) {
  const id = useId();

  const labelClassName = cn(
    focusOutlineStyles.focusWithinOutline,
    styles.optionLabel,
  );

  const inputClassName = cn(
    focusOutlineStyles.focusOutlineDisabled,
    styles.optionInput,
  );

  return (
    <div key={props.name} className={styles.optionContainer}>
      <label htmlFor={id} className={labelClassName} onClick={props.onClick}>
        <input
          id={id}
          type="radio"
          name={props.name}
          className={inputClassName}
          readOnly
          checked={props.defaultChecked}
          onClick={props.onClick}
        />
        {props.content}
      </label>
    </div>
  );
}
