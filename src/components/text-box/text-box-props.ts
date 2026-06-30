import { IconType } from "../icon";

export type TextBoxProps = {
  readonly className?: string;
  readonly value: string;
  readonly onChange: (newValue: string) => void;
  readonly deferred?: boolean;
  readonly icon?: IconType;
} & Partial<Pick<HTMLInputElement, "placeholder" | "type">>;
