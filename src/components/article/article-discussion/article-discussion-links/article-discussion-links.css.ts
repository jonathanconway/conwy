import { style } from "@vanilla-extract/css";

export const discussion = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  marginTop: "0.5rem",
});

export const count = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});
