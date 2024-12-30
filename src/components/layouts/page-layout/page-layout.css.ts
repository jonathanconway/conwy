import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "65rem",
  minHeight: "100vh",
  padding: "1rem",
  gap: "2rem",
});

export const mainWrapper = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1rem",
});
