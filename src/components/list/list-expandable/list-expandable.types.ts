import { ReactNode } from "react";

export interface ListExpandableProps {
  readonly listItems: readonly ReactNode[];
  readonly collapsedItemsCount?: number;
}
