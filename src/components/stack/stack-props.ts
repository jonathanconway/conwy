import { ReactNode } from "react";

import { SizeRem } from "../styling";

import { StackDirection } from "./stack-direction";

export interface StackProps {
  readonly direction?: StackDirection;
  readonly gap?: SizeRem;
  readonly children: ReactNode;
}
