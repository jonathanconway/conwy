import { style } from "@vanilla-extract/css";

import { colors } from "../styling";
import { vars } from "../theme";

export const checkboxCircle = style({
  fill: vars.layout.background.color,
  stroke: colors.green_500,
});

export const checkboxPath = style({
  fill: colors.green_500,
});
