import { ReactNode } from "react";

import { LayoutPropsBase } from "../layout-props";

export type LayoutGridProps = LayoutPropsBase & {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly gap?: number;
} & ({ readonly gridWidth: number } | { readonly gridHeight: number });
