import { style } from "@vanilla-extract/css";

export const container = style({
  display: "contents",
});

export const editable = style({
  backgroundColor: "lightyellow",
  padding: "0.25rem",
  margin: "-0.25rem",
  borderRadius: "0.2rem",
  maxWidth: "15rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  fontSize: "inherit",
  fontFamily: "inherit",
});
