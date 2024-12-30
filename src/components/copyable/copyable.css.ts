import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

export const toolbarContainer = style({
  position: "absolute",
  right: 0,
  top: 0,
  padding: "1rem",
  opacity: 0.25,

  ":hover": {
    opacity: 1,
  },
});
