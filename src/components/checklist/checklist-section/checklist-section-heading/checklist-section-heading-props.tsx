import { ReactNode } from "react";

export interface ChecklistSectionHeadingProps {
  readonly children?: ReactNode;
  readonly headingText: string;
  readonly itemsCount: number;
  readonly level?: number;
}
