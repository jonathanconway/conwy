import { globalStyle, style } from "@vanilla-extract/css";

export const pre = style({
  marginTop: 0,
  marginBottom: 0,
});

globalStyle(`${pre} code`, {
  border: "none",
});
