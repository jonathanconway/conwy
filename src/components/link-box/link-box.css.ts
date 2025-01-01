import { style } from "@vanilla-extract/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const linkBox = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  ...rounded.md,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: vars.box.decorative.border.color,
  padding: "0.5rem",
  gap: "1rem",
  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.linkBox.hover.background.color,
  },
});
