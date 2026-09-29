import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
});

globalStyle(`${container} > *`, {
  flex: 1,
});
