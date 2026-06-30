import { CheckboxBaseColors } from "./checkbox-base-colors";
import { CheckboxProps } from "./checkbox-props";

export function createCheckboxPropsMock(): CheckboxProps {
  return {
    label: "Checkbox Label",
    baseColor: CheckboxBaseColors.Yellow,
    onChange: () => {},
  };
}
