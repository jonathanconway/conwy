import { ComplexStyleRule } from "@vanilla-extract/css";

import { rounded } from "../styling";
import { vars } from "../theme";

export const linkBox: ComplexStyleRule = {
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
  textDecoration: "none",
  color: vars.text.body.color,

  ":hover": {
    backgroundColor: vars.linkBox.hover.background.color,
  },
};
