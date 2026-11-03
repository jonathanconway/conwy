import { ReactElement, ReactNode } from "react";

export interface LayoutCascadeProps {
  readonly children: readonly ReactElement[];
  readonly frontChild: ReactElement;
  readonly renderChildWrapper?: (
    child: ReactElement,
    childIndex: number,
  ) => ReactNode;
}
