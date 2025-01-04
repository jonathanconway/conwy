"use client";

import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import { BREAKPOINT_VALUES, Breakpoint } from "../styling";

interface ResponsiveProps {
  readonly minWidth?: Breakpoint;
  readonly maxWidth?: Breakpoint;
  readonly children?: ReactNode;
}

export function Responsive(props: ResponsiveProps) {
  const show = useMediaQuery({
    ...(props.minWidth
      ? { minWidth: BREAKPOINT_VALUES[props.minWidth] }
      : undefined),
    ...(props.maxWidth
      ? { maxWidth: BREAKPOINT_VALUES[props.maxWidth] }
      : undefined),
  });

  return show ? props.children : null;
}
