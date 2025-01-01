import { style } from "@vanilla-extract/css";

import { rounded } from "../../../styling";

export const image = style({
  ...rounded.md,
});

export const date = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});
