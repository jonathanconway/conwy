import { ReactNode } from "react";

export interface LayoutProps {
  readonly slots: LayoutSlotsProps;
}

export type LayoutSlotsMapProps = Record<string, ReactNode>;

export type LayoutSlotsArrayProps = readonly ReactNode[];

export type LayoutSlotsProps = LayoutSlotsMapProps | LayoutSlotsArrayProps;
