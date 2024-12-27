import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const childrenContainer = style({
  display: "inline-flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px",
  borderColor: vars.colors.red_100,
});

export const tooltip = {
  backgroundColor: vars.tooltip.background.color,
  color: vars.tooltip.color,
  zIndex: 10_000,
};
