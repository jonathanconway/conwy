import { style } from "@vanilla-extract/css";

import { media } from "../styling";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "1rem",

  "@media": {
    [media.md]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [media.sm]: {
      display: "flex",
      flexDirection: "column",
    },
  },
});
