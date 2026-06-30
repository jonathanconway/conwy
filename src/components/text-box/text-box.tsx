import { cn } from "@/framework/client";

import { Icon, IconTypes } from "../icon";

import { TextBoxProps } from "./text-box-props";
import * as styles from "./text-box.css";
import { useTextBox } from "./text-box.hooks";

export function TextBox(props: TextBoxProps) {
  const textBoxProps = useTextBox(props);

  const {
    className = styles.input,
    value,
    onChange,
    icon,
    ...restProps
  } = props;

  const inputClassName = cn(className, icon ? styles.inputWithIcon : undefined);

  return (
    <div className={styles.container}>
      {icon && (
        <span className={styles.iconContainer}>
          <Icon icon={icon} />
        </span>
      )}
      <input
        type="text"
        value={textBoxProps.value}
        className={inputClassName}
        onChange={textBoxProps.handleChange}
        {...restProps}
      />
    </div>
  );
}
