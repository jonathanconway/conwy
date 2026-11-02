import { ReactNode } from "react";

import { BreadcrumbSegment } from "../../breadcrumb";
import { NavItem } from "../../header";

export interface MainAsidePageProps {
  readonly selectedNavItem?: NavItem;
  readonly breadcrumbSegments?: BreadcrumbSegment[];
  // todo: consider just passing whole route object in, including title
  readonly title?: string;

  readonly subHeaderSlot?: ReactNode;
  readonly mainSlot: ReactNode;
  readonly asideSlot: ReactNode;
}
