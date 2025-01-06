import { MouseEventHandler, useId } from "react";

import * as styles from "./switch.css";
import { SwitchOption as SwitchOption_, SwitchProps } from "./switch.types";

export function Switch(props: SwitchProps) {
  const name = useId();

  const handleOptionClick = (option: SwitchOption_) => () => {
    props.onSelect?.(option);
  };

  return (
    <div className={styles.container}>
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

type SwitchOptionGrouped = SwitchOption_ & {
  readonly name: string;
  readonly defaultChecked: boolean;

  readonly onClick?: MouseEventHandler;
};

function SwitchOption(props: SwitchOptionGrouped) {
  const id = useId();

  return (
    <div key={props.name} className={styles.optionContainer}>
      <label htmlFor={id} className={styles.optionText} onClick={props.onClick}>
        <input
          readOnly
          id={id}
          type="radio"
          name={props.name}
          className={styles.optionInput}
          checked={props.defaultChecked}
          onClick={props.onClick}
        />
        {props.content}
      </label>
    </div>
  );
}
