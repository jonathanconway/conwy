import { style } from "@vanilla-extract/css";

import { rounded, text } from "../styling";
import { vars } from "../theme";

export const code = style({
  whiteSpace: "pre-wrap",
  ...rounded.md,
  borderWidth: "1px",
  borderColor: vars.code.border.color,
  paddingLeft: "0.375rem",
  paddingRight: "0.375rem",
  ...text.size.sm,
});
