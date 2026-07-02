import { ReactNode } from "react";

import { Filter } from "../filters-props";

export interface FilterGroupProps {
  readonly title: string;
  readonly children: ReactNode;

  readonly filters: readonly Filter[];
  readonly selectedFilters: readonly Filter[];
  readonly onChange: (selectedFilters: readonly Filter[]) => void;
}
