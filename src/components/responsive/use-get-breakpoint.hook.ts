"use client";

import { useMediaQuery } from "react-responsive";

import { BREAKPOINT_RANGES, Breakpoints } from "../styling";

export function useGetBreakpoint() {
  const sm = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.Small]);
  const lg = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.Large]);
  const md = useMediaQuery(BREAKPOINT_RANGES[Breakpoints.Medium]);

  switch (true) {
    case sm:
      return Breakpoints.Small;
    case md:
      return Breakpoints.Medium;
    case lg:
      return Breakpoints.Large;
  }
  return Breakpoints.Large;
}
