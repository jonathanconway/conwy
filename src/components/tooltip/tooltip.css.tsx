import { style } from "@vanilla-extract/css";

import { colors } from "../styling";

export const childrenContainer = style({
  display: "inline-flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px",
  borderColor: colors.red_100,
});
