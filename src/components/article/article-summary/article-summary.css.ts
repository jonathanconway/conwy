import { style } from "@vanilla-extract/css";

import { rounded, text } from "../../styling";
import { vars } from "../../theme";

export const summaryContainer = style({
  borderWidth: "1px",
  borderColor: vars.articleSummary.border.color,
  borderStyle: "solid",
  ...rounded.regular,
  padding: "1rem",
  marginTop: "1rem",
  color: vars.articleSummary.color,
  ...text.size.md,
});
