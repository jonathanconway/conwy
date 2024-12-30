import { style } from "@vanilla-extract/css";

import { colors } from "../styling";

export const backdrop = style({
  position: "fixed",
  display: "flex",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
  backgroundColor: colors.black_50,
});
