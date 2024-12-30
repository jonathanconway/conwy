import { style } from "@vanilla-extract/css";

import { colors } from "../styling";
import { vars } from "../theme";

export const blockquote = style({
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "1rem",
  backgroundColor: vars.blockQuote.background.color,
  borderLeftWidth: "8px",
  borderColor: colors.stone_400,
});
