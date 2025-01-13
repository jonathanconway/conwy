import { globalStyle, style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

globalStyle(`${section} h3`, {
  marginTop: "1.5rem",
});
