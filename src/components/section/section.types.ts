import { HTMLProps, ReactNode } from "react";

export interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, "label"> {
  readonly label: ReactNode;
  readonly children: ReactNode;
}
