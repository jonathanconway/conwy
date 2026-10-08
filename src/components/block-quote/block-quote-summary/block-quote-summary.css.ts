import { globalStyle, style } from "@vanilla-extract/css";

import { rounded } from "../../styling";
import * as textMixins from "../../text/text-size";
import { vars } from "../../theme";

export const summaryContainer = style({
  borderWidth: "1px",
  borderColor: vars.blockQuoteSummary.border.color,
  borderStyle: "solid",
  backgroundColor: vars.blockQuoteSummary.background.color,
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: vars.blockQuoteSummary.color,
  ...rounded.regular,
  ...textMixins.sm,
});

globalStyle(`${summaryContainer} > p`, {
  display: "inline",
});

globalStyle(`${summaryContainer} > ul`, {
  display: "block",
});
