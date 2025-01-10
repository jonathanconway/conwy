import { style } from "@vanilla-extract/css";

import * as shadowMixins from "../../shadow";
import { colors, rounded, text } from "../../styling";

export const noteHotspot = style({
  position: "absolute",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",

  backgroundColor: colors.stone_700,
  color: colors.white,
  borderColor: colors.yellow_400,
  borderWidth: "2px",
  borderStyle: "solid",
  boxShadow: shadowMixins.boxShadowRegular,
  width: "1.5rem",
  height: "1.5rem",

  ...rounded.full,
  ...text.size.sm,
});
