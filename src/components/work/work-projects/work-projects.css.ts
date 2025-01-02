import { globalStyle, style } from "@vanilla-extract/css";

import { text } from "../../styling";

export const item = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
});

export const title = style({
  ...text.size.xs,
  lineHeight: "1.5rem",
});

export const icon = style({});

globalStyle(`${icon} linearGradient`, {
  filter: "brightness(2)",
});
