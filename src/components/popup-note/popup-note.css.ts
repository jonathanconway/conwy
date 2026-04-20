import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const popupNoteContainer = style({
  position: "relative",
  display: "inline-flex",
});

export const popupNoteContentsContainer = style({
  maxWidth: "5rem",
  fontWeight: "normal",
});

export const popupNoteLink = style({
  stroke: vars.link.text.color,
  cursor: "pointer",
});

globalStyle(`${popupNoteLink} *`, {
  stroke: "transparent",
  fill: vars.link.text.color,
});
