import { globalStyle, style } from "@vanilla-extract/css";

import { rounded, text } from "../../styling";
import { vars } from "../../theme";

export const summaryContainer = style({
  borderWidth: "1px",
  borderColor: vars.blockQuoteSummary.border.color,
  borderStyle: "solid",
  backgroundColor: vars.blockQuoteSummary.background.color,
  ...rounded.regular,
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: vars.blockQuoteSummary.color,
  ...text.size.sm,
});

globalStyle(`${summaryContainer} > *`, {
  display: "inline",
});
