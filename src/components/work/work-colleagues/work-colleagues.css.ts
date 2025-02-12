import { globalStyle, style } from "@vanilla-extract/css";

import { text } from "../../styling";

export const item = style({
  listStyle: "none",
});

export const title = style({
  ...text.size.xs,
  lineHeight: "1.5rem",
});

export const icon = style({
  width: "1rem",
  height: "1rem",
  display: "inline-block",
  verticalAlign: "middle",
  margin: 0,
  marginRight: "0.25rem",
});

globalStyle(`${icon} linearGradient`, {
  filter: "brightness(2)",
});
