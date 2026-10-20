import { ReactNode } from "react";

import { HeadingLevel } from "../../../heading";

export interface ChecklistSectionHeadingProps {
  readonly children?: ReactNode;
  readonly headingText: string;
  readonly itemsCount: number;
  readonly level?: HeadingLevel;
}
