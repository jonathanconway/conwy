import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonAppearance } from "../button/button-appearance";
import { ButtonProps } from "../button/button-props";
import { IconType } from "../icon/icon-types";

export type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonProps &
  IconButtonPropsExtended;

interface IconButtonPropsExtended {
  readonly size?: string;
  readonly icon?: IconType;
  readonly appearance?: ButtonAppearance;
}
