import { globalStyle, style } from "@vanilla-extract/css";

import { rounded, text } from "../../styling";
import { vars } from "../../theme";

export const disclaimerContainer = style({
  borderWidth: "1px",
  borderColor: vars.blockQuoteDisclaimer.border.color,
  borderStyle: "solid",
  backgroundColor: vars.blockQuoteDisclaimer.background.color,
  ...rounded.regular,
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: vars.blockQuoteDisclaimer.color,
  ...text.size.sm,
});

globalStyle(`${disclaimerContainer} > p`, {
  display: "inline",
});

globalStyle(`${disclaimerContainer} > ul`, {
  display: "block",
});
