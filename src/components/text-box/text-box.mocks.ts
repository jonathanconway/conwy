import { IconTypes } from "../icon";

export function createTextBoxPropsMock() {
  return {
    value: "TextBox value",
    onChange: () => {},
    icon: IconTypes.Search,
  };
}
