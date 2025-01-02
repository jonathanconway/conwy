import { ReactNode } from "react";

import { TooltipProps } from "../tooltip";

export interface CarouselItem {
  readonly title?: ReactNode;
  readonly tooltip?: TooltipProps;
}
