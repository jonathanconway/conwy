import { ReactNode } from "react";

import * as spacing from "./spacing.css";

interface SpacingContainerProps {
  readonly children: ReactNode;
}

export function SpacingContainer(props: SpacingContainerProps) {
  return <div className={spacing.spacingContainer}>{props.children}</div>;
}
