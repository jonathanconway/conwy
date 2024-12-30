import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const checkboxCircle = style({
  fill: "transparent",
  stroke: vars.icon.checkbox.color,
});

export const checkboxPath = style({
  fill: vars.icon.checkbox.color,
});
