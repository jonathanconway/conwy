import { ReactNode } from "react";

import * as spacingStyles from "../spacing/spacing.css";

export interface ContainerProps {
  readonly children: ReactNode;
}

export function Container(props: ContainerProps) {
  return <div className={spacingStyles.spacingContainer}>{props.children}</div>;
}
