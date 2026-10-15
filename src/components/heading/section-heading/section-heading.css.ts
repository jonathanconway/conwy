import { globalStyle, style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import * as linkMixins from "../../link/link.mixins";
import * as textSizeConsts from "../../text/text-size/text-size.consts";
import * as textWeightMixins from "../../text/text-weight/text-weight.mixins";
import { vars } from "../../theme";

export const link = style({
  position: "relative",
  ...textWeightMixins.heading3,
  color: vars.text.body.color,
  cursor: "pointer",
  textDecorationLine: "none",

  ":hover": {
    textDecorationLine: "underline",
    textDecorationColor: vars.text.body.color,
  },
});

export const linkHoverHash = style({
  position: "absolute",
  display: "flex",
  top: 0,
  alignItems: "center",
  left: "-2rem",
  bottom: 0,
  visibility: "hidden",
  paddingLeft: "1rem",
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  color: linkMixins.linkContent[":hover"].color,
});

globalStyle(`${link}:hover ${linkHoverHash}, ${link}:focus ${linkHoverHash}`, {
  visibility: "visible",
});
