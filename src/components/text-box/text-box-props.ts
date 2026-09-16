import { HTMLAttributes, InputHTMLAttributes } from "react";

import { IconType } from "../icon";

export type TextBoxProps = {
  readonly className?: string;
  readonly value?: string;
  readonly onChange: (newValue: string) => void;
  readonly deferred?: boolean;
  readonly icon?: IconType;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "placeholder" | "type"> &
  Pick<HTMLAttributes<HTMLInputElement>, "autoFocus">;
