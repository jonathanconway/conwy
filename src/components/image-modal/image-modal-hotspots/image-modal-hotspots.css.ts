import { style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import * as shadowMixins from "../../shadow/shadow.mixins";
import { colors, rounded } from "../../styling";
import * as textSizeConsts from "../../text/text-size/text-size.consts";

export const noteHotspot = style({
  position: "absolute",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  backgroundColor: colors.stone_700,
  color: colors.white,
  borderColor: colors.yellow_400,
  borderWidth: "2px",
  borderStyle: "solid",
  boxShadow: shadowMixins.boxShadowRegular,
  width: "1.5rem",
  height: "1.5rem",

  ...rounded.full,
});
