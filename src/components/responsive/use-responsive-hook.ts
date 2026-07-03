import { useMediaQuery } from "react-responsive";

import { BREAKPOINT_VALUES, Breakpoint } from "../styling";

interface UseResponsiveParams {
  readonly minWidth?: Breakpoint;
  readonly maxWidth?: Breakpoint;
}

export function useResponsive(params: UseResponsiveParams) {
  return useMediaQuery({
    ...(params.minWidth
      ? { minWidth: BREAKPOINT_VALUES[params.minWidth] }
      : undefined),
    ...(params.maxWidth
      ? { maxWidth: BREAKPOINT_VALUES[params.maxWidth] }
      : undefined),
  });
}
