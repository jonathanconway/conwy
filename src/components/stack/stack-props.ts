import { ReactNode } from "react";

import { SizeRem } from "../styling";

export interface StackProps {
  readonly direction?: "column" | "row";
  readonly gap?: SizeRem;
  readonly children: ReactNode;
}
