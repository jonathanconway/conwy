import { style } from "@vanilla-extract/css";

export const chain = style({
  display: "inline-flex",
  flexDirection: "row",
  flexFlow: "wrap",
  gap: "0.25rem",
});

export const part = style({
  display: "contents",
});
