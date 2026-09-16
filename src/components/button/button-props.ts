import { HTMLProps } from "react";

import { ButtonAppearance } from "./button-appearance";

export type ButtonProps = HTMLProps<HTMLButtonElement> & ButtonPropsExtended;

interface ButtonPropsExtended {
  readonly isSelected?: boolean;
  readonly appearance?: ButtonAppearance;
}
