import { CSSProperties, ReactNode } from "react";

import { ResponsiveVisibilityMap } from "../responsive";

export interface TooltipProps {
  readonly key?: string;
  readonly children?: readonly ReactNode[] | ReactNode;
  readonly contents?: ReactNode | string;
  readonly style?: CSSProperties;
  readonly responsiveVisibility?: ResponsiveVisibilityMap;
}
