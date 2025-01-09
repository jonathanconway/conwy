"use client";

import { useMediaQuery } from "react-responsive";

import { BREAKPOINT_RANGES, Breakpoints } from "../styling";

export function useGetBreakpoint() {
  const sm = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.sm]);
  const lg = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.lg]);
  const md = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.md]);

  switch (true) {
    case sm:
      return Breakpoints.sm;
    case md:
      return Breakpoints.md;
    case lg:
      return Breakpoints.lg;
  }
  return Breakpoints.lg;
}
