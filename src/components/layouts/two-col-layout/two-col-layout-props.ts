import { CSSProperties, ReactNode } from "react";

export interface TwoColLayoutProps {
  readonly children: [ReactNode, ReactNode];
  readonly justifyContent?: CSSProperties["justifyContent"];
}
