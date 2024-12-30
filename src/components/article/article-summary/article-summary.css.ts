import { style } from "@vanilla-extract/css";

import { rounded } from "../../styling";
import { vars } from "../../theme";

export const summaryContainer = style({
  borderWidth: "1px",
  borderColor: vars.articleSummary.border.color,
  ...rounded.regular,
  padding: "1rem",
  marginTop: "1rem",
  lineHeight: "1.75rem" /* 28px */,
  fontWeight: 500,
  color: vars.articleSummary.color,
});
