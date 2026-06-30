import { debounce } from "lodash";
import { useEffect, useState } from "react";

import { TextBoxProps } from "./text-box-props";

export function useTextBox(props: TextBoxProps) {
  const [value, setValue] = useState(props.value);

  useEffect(
    debounce(() => {
      setTimeout(() => {
        props.onChange(value);
      });
    }, 500),
    [value],
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return {
    value,
    handleChange,
  };
}
