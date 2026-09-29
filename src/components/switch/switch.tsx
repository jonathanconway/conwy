import { useId } from "react";

import { cn } from "@/framework/client";

import { SwitchOption } from "./switch-option";
import * as styles from "./switch.css";
import { SwitchOption as SwitchOption_, SwitchProps } from "./switch.types";

export function Switch(props: SwitchProps) {
  const {
    className = cn(styles.container, props.className),
    options,
    value,
    onSelect,
    ...restProps
  } = props;
  const name = useId();

  const handleOptionClick = (option: SwitchOption_) => () => {
    props.onSelect?.(option);
  };

  return (
    <div className={className} {...restProps}>
      {props.options.map((option) => (
        <SwitchOption
          key={option.name}
          name={name}
          content={option.content}
          defaultChecked={option.name === props.value?.name}
          onClick={handleOptionClick(option)}
        />
      ))}
    </div>
  );
}
