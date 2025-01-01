import { style } from "@vanilla-extract/css";

import { text } from "../../styling";

export const techCategory = "";

export const techList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const techListItem = style({
  ...text.size.sm,
});

export const techSubList = style({
  marginLeft: "0.5rem",
});

export const techSubListItem = style({
  display: "inline-block",
  ...text.size.xs,
  marginRight: "0.5rem",
});
