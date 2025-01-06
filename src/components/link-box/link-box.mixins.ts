import { ComplexStyleRule } from "@vanilla-extract/css";

import { focusOutline } from "../focus-outline";
import { media, rounded } from "../styling";
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
  cursor: "pointer",
  textDecoration: "none",
  color: vars.text.body.color,
  ...focusOutline,

  ":hover": {
    backgroundColor: vars.linkBox.hover.background.color,
  },

  "@media": {
    [media.sm]: {
      gap: "0.5rem",
    },
    [media.mdAndUp]: {
      gap: "1rem",
    },
  },
};
