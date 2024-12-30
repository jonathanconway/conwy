import { style } from "@vanilla-extract/css";

import { vars } from "../../theme";

export const summaryContainer = style({
  borderWidth: "1px",
  borderColor: vars.articleSummary.border.color,
  borderRadius: "0.25rem" /* 4px */,
  padding: "1rem",
  marginTop: "1rem",
  lineHeight: "1.75rem" /* 28px */,
  fontWeight: 500,
  color: vars.articleSummary.color,
});
