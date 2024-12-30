import { style } from "@vanilla-extract/css";

import { colors } from "../styling";
import { vars } from "../theme";

export const childrenContainer = style({
  display: "inline-flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px",
  borderColor: colors.red_100,
});

export const tooltip = {
  backgroundColor: vars.tooltip.background.color,
  color: vars.tooltip.color,
  zIndex: 10_000,
};
