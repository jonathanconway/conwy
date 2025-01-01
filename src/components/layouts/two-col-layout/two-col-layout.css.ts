import { style } from "@vanilla-extract/css";

import { media } from "@/components/styling";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      flexDirection: "row",
    },
  },
});

export const column = style({
  flex: 1,
});
