import { globalStyle, style } from "@vanilla-extract/css";

import { rems } from "@/framework/utils/rems.css_";

import * as linkMixins from "../../link/link.mixins";
import * as textSizeConsts from "../../text/text-size/text-size.consts";
import { vars } from "../../theme";

export const link = style({
  position: "relative",
  fontWeight: 600,
  color: vars.text.body.color,
  cursor: "pointer",
  textDecorationLine: "none",
  display: "inline-block",

  ":hover": {
    textDecorationLine: "underline",
    textDecorationColor: vars.text.body.color,
  },
});

export const linkHoverIcon = style({
  position: "absolute",
  display: "flex",
  top: 0,
  alignItems: "center",
  right: "-1.5rem",
  bottom: 0,
  visibility: "hidden",
  paddingLeft: "1rem",
  fontSize: rems(textSizeConsts.fontSizeRems.sm),
  color: linkMixins.linkContent[":hover"].color,
});

globalStyle(`${link}:hover ${linkHoverIcon}, ${link}:focus ${linkHoverIcon}`, {
  visibility: "visible",
});
