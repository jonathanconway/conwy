import { TypeOfConst } from "@/framework";

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

const sm = `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Small] - 1}px)`;
const greaterThanSm = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Small]}px)`;
const lessThanMd = `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`;
const md = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Small]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`;
const mdAndUp = greaterThanSm;
const greaterThanMd = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Medium]}px)`;
const lg = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Medium]}px) and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Large] - 1}px)`;
const lgAndUp = greaterThanMd;
const lessThanLg = `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Medium] - 1}px)`;
const greaterThanLg = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Large]}px)`;
const xl = `screen and (min-width: ${BREAKPOINT_VALUES[Breakpoints.Large]}px)`;
const xlAndUp = greaterThanLg;
const lessThanXl = `screen and (max-width: ${BREAKPOINT_VALUES[Breakpoints.Large] - 1}px)`;

export const media = {
  sm,
  greaterThanSm,
  lessThanMd,
  md,
  mdAndUp,
  greaterThanMd,
  lg,
  lgAndUp,
  lessThanLg,
  greaterThanLg,
  xl,
  xlAndUp,
  lessThanXl,
};
