import { style } from "@vanilla-extract/css";

import { media } from "../styling";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media": {
    [media.sm]: {
      gap: "1.5rem",
    },
  },
});

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
  gap: "1rem",
});

export const main = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  gap: "1rem",

  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
  },
});

export const blurb = style({
  "@media": { [media.mdAndUp]: { flex: 1 } },
});

export const aside = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  "@media": { [media.mdAndUp]: { flex: 1 } },
});
