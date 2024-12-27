import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const blockquote = style({
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "1rem",
  backgroundColor: vars.blockQuote.background.color,
  borderLeftWidth: "8px",
  borderColor: vars.colors.stone_400,
});
