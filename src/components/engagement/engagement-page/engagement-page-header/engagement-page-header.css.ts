import { style } from "@vanilla-extract/css";

import { media } from "../../../styling";

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      gap: "1rem",
    },
  },
});

export const headerLeft = style({
  display: "flex",
  flex: 1,

  flexDirection: "row",
  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
    [media.mdAndUp]: {
      alignItems: "center",
    },
  },
  gap: "0.75rem",
});

export const headerLeftImage = style({
  width: "4rem",
});

export const headerLeftTitle = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.25rem",
});

export const headerRight = style({ flex: 1 });
