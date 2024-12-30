import { style } from "@vanilla-extract/css";

import { text } from "../styling";
import { vars } from "../theme";

export const label = style({
  textTransform: "uppercase",
  fontWeight: 500,
  color: vars.label.color,
  ...text.size.xs,
});
