import { style } from "@vanilla-extract/css";

import { rounded, text } from "../../../styling";

export const image = style({
  ...rounded.md,
});

export const date = style({
  ...text.size.xs,
});
