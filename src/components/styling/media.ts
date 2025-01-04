export const Breakpoints = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type Breakpoint = keyof typeof Breakpoints;

export const BREAKPOINT_VALUES = {
  [Breakpoints.sm]: 640,
  [Breakpoints.md]: 800,
  [Breakpoints.lg]: 1040,
};

export const BREAKPOINT_RANGES = {
  [Breakpoints.sm]: {
    minWidth: 0,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.sm],
  },
  [Breakpoints.md]: {
    minWidth: BREAKPOINT_VALUES[Breakpoints.sm] + 1,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.md],
  },
  [Breakpoints.lg]: {
    minWidth: BREAKPOINT_VALUES[Breakpoints.md] + 1,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.lg],
  },
};

export const media = {
  sm: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.sm] - 1}px)`,
  lessThanMd: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.md] - 1}px)`,
  md: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.sm]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.md] - 1}px)`,
  mdAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.sm]}px)`,
  lg: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.md]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.lg] - 1}px)`,
  lgAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.md]}px)`,
  lessThanLg: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.md] - 1}px)`,
  xl: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.lg]}px)`,
  xlAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.lg]}px)`,
  lessThanXl: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.lg] - 1}px)`,
};
