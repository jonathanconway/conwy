import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const checkboxCircle = style({
  fill: vars.colors.page_background,
  stroke: vars.colors.green_500,
});

export const checkboxPath = style({
  fill: vars.colors.green_500,
});
