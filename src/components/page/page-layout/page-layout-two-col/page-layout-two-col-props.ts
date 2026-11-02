import { CSSProperties, ReactNode } from "react";

export interface PageLayoutTwoColProps {
  readonly children: [ReactNode, ReactNode];
  readonly justifyContent?: CSSProperties["justifyContent"];
}
