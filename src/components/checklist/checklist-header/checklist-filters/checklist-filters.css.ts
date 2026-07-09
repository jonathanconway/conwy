import { style } from "@vanilla-extract/css";

export const filteredTagsContainer = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: "1rem",
  rowGap: "0.5rem",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
});
