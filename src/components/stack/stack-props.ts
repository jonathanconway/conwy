import { CSSProperties, HTMLProps, ReactNode } from "react";

import { RemValue } from "@/framework/css";

import { StackDirection } from "./stack-direction";
import { StackDistribution } from "./stack-distribution";

export interface StackProps extends HTMLProps<HTMLDivElement> {
  readonly direction?: StackDirection;
  readonly gap?: RemValue;
  readonly children: ReactNode;
  readonly distribution?: StackDistribution;
  readonly className?: string;
  readonly justifyContent?: CSSProperties["justifyContent"];
  readonly alignItems?: CSSProperties["alignItems"];
  readonly fill?: boolean;
}
