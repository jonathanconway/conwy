import { style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const container = style({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
  },
});

export const column = style({
  flex: 1,
});
