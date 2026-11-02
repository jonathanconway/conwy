import { ReactNode } from "react";

import { BreadcrumbSegment } from "../breadcrumb";
import { NavItem } from "../header";

export interface PageProps {
  readonly selectedNavItem?: NavItem;
  readonly breadcrumbSegments?: readonly BreadcrumbSegment[];
  // todo: consider just passing whole route object in, including title
  readonly title?: ReactNode;
  readonly subHeaderSlot?: ReactNode;
  readonly children: ReactNode;
}
