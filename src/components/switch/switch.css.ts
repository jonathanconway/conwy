import { style } from "@vanilla-extract/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const container = style({
  display: "inline-flex",
  padding: "0.25rem",
  flexDirection: "row",
  backgroundColor: vars.switch.background.color,
  ...rounded.full,
});
