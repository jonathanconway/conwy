import { style } from "@vanilla-extract/css";

import { cn } from "../../framework/client";

export const small = style({
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const xsmall = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});

export const size = {
  small,
  xsmall,
};

export const summary = size.small;

export const body = cn(
  size.small,
  style({
    marginTop: "1rem" /* 16px */,
  }),
);
