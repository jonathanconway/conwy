import { globalStyle, style } from "@vanilla-extract/css";

import { focusOutline } from "../../focus-outline";
import * as linkMixins from "../../link/link.mixins";
import { text } from "../../styling";
import { vars } from "../../theme";

export const link = style({
  position: "relative",
  fontWeight: 600,
  color: vars.text.body.color,
  cursor: "pointer",
  textDecorationLine: "none",

  ...focusOutline,

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
  ...text.size.sm,
  color: linkMixins.linkContent[":hover"].color,
});

globalStyle(`${link}:hover ${linkHoverHash}, ${link}:focus ${linkHoverHash}`, {
  visibility: "visible",
});
