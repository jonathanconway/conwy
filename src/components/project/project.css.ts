import { style } from "@vanilla-extract/css";

import { media, text } from "../styling";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      gap: "1.5rem",
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

export const headerLeftTitle = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.25rem",
});

export const headerLeftImage = style({});

export const headerRight = style({
  flex: 1,
});

export const client = style({
  marginTop: 0,
});

export const main = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
  },
});

export const blurb = style({
  ...text.size.sm,
  flex: 1,
});

export const body = style({
  flex: 1,
});

export const blurbContent = style({});

export const aside = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "1.5rem",
});

export const techAndOtherContainer = style({
  display: "flex",
  flexDirection: "row",
  "@media": {
    [media.sm]: {
      flexDirection: "column",
      gap: "1rem",
    },
  },
});

export const techContainer = style({ display: "flex", flex: 1 });

export const otherContainer = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1.5rem",

  "@media": {
    [media.sm]: {
      gap: "1rem",
    },
  },
});
