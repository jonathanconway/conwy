import { globalStyle, style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import { text } from "../../styling";
import { vars } from "../../theme";

export const link = style({
  position: "relative",
  ...linkMixins.link,
  ...text.size.xl,
  fontWeight: 600,
});

export const linkHoverHash = style({
  position: "absolute",
  display: "flex",
  top: 0,
  alignItems: "center",
  left: "-1rem",
  bottom: 0,
  color: vars.label.color,
  visibility: "hidden",
  paddingLeft: "1rem",
  ...text.size.sm,
});

globalStyle(`${link}:hover ${linkHoverHash}`, {
  visibility: "visible",
});
