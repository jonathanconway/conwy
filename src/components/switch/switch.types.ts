import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type HTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type SwitchProps = Omit<HTMLDivProps, "onSelect"> & {
  readonly options: readonly SwitchOption[];
  readonly value?: SwitchOption;

  readonly onSelect?: (option: SwitchOption) => void;
};

export interface SwitchOption {
  readonly name: string;
  readonly content: ReactNode;
}
