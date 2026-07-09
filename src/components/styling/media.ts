import { TypeOfConst } from "@/framework/client";

export const Breakpoints = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
} as const;

export type Breakpoint = TypeOfConst<typeof Breakpoints>;

export const BREAKPOINT_VALUES = {
  [Breakpoints.Small]: 640,
  [Breakpoints.Medium]: 800,
  [Breakpoints.Large]: 1040,
};

export const BREAKPOINT_RANGES = {
  [Breakpoints.Small]: {
    minWidth: 0,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.Small],
  },
  [Breakpoints.Medium]: {
    minWidth: BREAKPOINT_VALUES[Breakpoints.Small] + 1,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.Medium],
  },
  [Breakpoints.Large]: {
    minWidth: BREAKPOINT_VALUES[Breakpoints.Medium] + 1,
    maxWidth: BREAKPOINT_VALUES[Breakpoints.Large],
  },
};

export const media = {
  sm: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Small] - 1}px)`,
  lessThanMd: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`,
  md: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Small]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`,
  mdAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Small]}px)`,
  lg: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Medium]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Large] - 1}px)`,
  lgAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Medium]}px)`,
  lessThanLg: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`,
  xl: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Large]}px)`,
  xlAndUp: `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Large]}px)`,
  lessThanXl: `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Large] - 1}px)`,
};
