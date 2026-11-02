import { ReactNode } from "react";

export interface MainAsideLayoutProps {
  readonly mainSlot: ReactNode;
  readonly asideSlot?: ReactNode;
}
