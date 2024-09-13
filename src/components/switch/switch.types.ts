import { ReactNode } from "react";

export interface SwitchProps {
  readonly options: readonly SwitchOption[];
  readonly value?: SwitchOption;

  readonly onSelect?: (option: SwitchOption) => void;
}

export interface SwitchOption {
  readonly name: string;
  readonly content: ReactNode;
}
