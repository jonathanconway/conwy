"use client";

import { ReactNode } from "react";

import { Breakpoint } from "../styling";

import { useResponsive } from "./use-responsive-hook";

interface ResponsiveProps {
  readonly minWidth?: Breakpoint;
  readonly maxWidth?: Breakpoint;
  readonly children?: ReactNode;
}

export function Responsive(props: ResponsiveProps) {
  const show = useResponsive(props);
  return show ? props.children : null;
}
