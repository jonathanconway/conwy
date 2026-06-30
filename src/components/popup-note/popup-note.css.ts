import { globalStyle, style } from "@vanilla-extract/css";

import * as textMixins from "../text/text.mixins";
import { vars } from "../theme";

export const popupNoteContainer = style({
  position: "relative",
  display: "inline-flex",
});

export const popupNoteContentsContainer = style({
  maxWidth: "5rem",
  ...textMixins.small,
  color: vars.text.body.inverseColor,
});

export const popupNoteLink = style({
  stroke: vars.link.text.color,
  cursor: "pointer",
});

globalStyle(`${popupNoteLink} *`, {
  stroke: "transparent",
  fill: vars.link.text.color,
});
