import { style } from "@vanilla-extract/css";

import { colors, rounded } from "../styling";
import { vars } from "../theme";

export const blockquote = style({
  padding: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  backgroundColor: vars.blockQuote.background.color,
  borderLeftWidth: "8px",
  borderColor: colors.stone_400,
  ...rounded.md,

  selectors: {
    "&:first-child": {
      marginTop: 0,
    },
  },
});
