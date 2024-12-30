export const Breakpoints = {
  sm: 640,
  md: 800,
  lg: 1040,
} as const;

export type Breakpoint = keyof typeof Breakpoints;

export const media = {
  sm: `screen and (max-width: ${Breakpoints.sm - 1}px)`,
  lessThanMd: `screen and (max-width: ${Breakpoints.md - 1}px)`,
  md: `screen and (min-width: ${Breakpoints.sm}px) and (max-width: ${Breakpoints.md - 1}px)`,
  mdAndUp: `screen and (min-width: ${Breakpoints.sm}px)`,
  lg: `screen and (min-width: ${Breakpoints.md}px) and (max-width: ${Breakpoints.lg - 1}px)`,
  lgAndUp: `screen and (min-width: ${Breakpoints.md}px)`,
  lessThanLg: `screen and (max-width: ${Breakpoints.md - 1}px)`,
  xl: `screen and (min-width: ${Breakpoints.lg}px)`,
  xlAndUp: `screen and (min-width: ${Breakpoints.lg}px)`,
  lessThanXl: `screen and (max-width: ${Breakpoints.lg - 1}px)`,
};
