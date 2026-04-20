import { useId } from "react";

import { cn } from "@/framework/client";

import { CheckboxBaseColors } from "./checkbox-base-colors";
import { CheckboxProps } from "./checkbox-props";
import * as styles from "./checkbox.css";

export function Checkbox(props: CheckboxProps) {
  const { disabled, className: className_, baseColor, ...restProps } = props;

  const classNameBaseColor = {
    [CheckboxBaseColors.Yellow]: styles.checkboxInputBaseColorYellow,
    [CheckboxBaseColors.Purple]: styles.checkboxInputBaseColorPurple,
  }[baseColor ?? CheckboxBaseColors.Purple];
  const className = cn(styles.checkboxInput, classNameBaseColor);

  const generatedId = useId();
  const id = props.id ?? generatedId;

  if (props.label) {
    return (
      <label htmlFor={id} className={styles.checkboxLabel}>
        <input type="checkbox" className={className} id={id} {...restProps} />
        {props.label}
      </label>
    );
  }

  return <input type="checkbox" className={className} {...restProps} />;
}
