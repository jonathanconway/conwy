import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  width: "100%",
});

export const mainColumn = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.25rem",
  overflow: "hidden",
});

export const asideColumn = style({
  display: "flex",
  width: "5rem",
  flexDirection: "column",
  gap: "0.75rem",
});
