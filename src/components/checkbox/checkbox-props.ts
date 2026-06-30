import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

import { CheckboxBaseColor } from "./checkbox-base-colors";

export type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  readonly disabled?: boolean;
  readonly label?: ReactNode;
  readonly onChange?: (checked: boolean) => void;

  readonly baseColor?: CheckboxBaseColor;
};
