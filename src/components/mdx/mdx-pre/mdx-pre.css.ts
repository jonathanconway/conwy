import { globalStyle, style } from "@vanilla-extract/css";

export const pre = style({});

globalStyle(`${pre} code`, {
  border: "none",
});
