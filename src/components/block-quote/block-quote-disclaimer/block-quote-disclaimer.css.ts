import { globalStyle, style } from "@vanilla-extract/css";

import { rounded } from "../../styling";
import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import { vars } from "../../theme";

export const disclaimerContainer = style({
  borderWidth: "1px",
  borderColor: vars.blockQuoteDisclaimer.border.color,
  borderStyle: "solid",
  backgroundColor: vars.blockQuoteDisclaimer.background.color,
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: vars.blockQuoteDisclaimer.color,
  ...rounded.regular,
  ...textSizeMixins.small,
});

globalStyle(`${disclaimerContainer} > p`, {
  display: "inline",
});

globalStyle(`${disclaimerContainer} > ul`, {
  display: "block",
});
