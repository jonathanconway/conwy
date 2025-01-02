import { globalStyle, style } from "@vanilla-extract/css";

import { media, text } from "../styling";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
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

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
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

export const client = style({ marginTop: 0 });

export const jobTitle = style({
  fontWeight: 600,
  "@media": {
    [media.mdAndUp]: {
      ...text.size.sm,
    },
    [media.sm]: {
      ...text.size.xs,
    },
  },
});

export const blurb = style({ flex: 1 });

export const aside = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  "@media": { [media.mdAndUp]: { flex: 1 } },
});

export const techAndFeedbackContainer = style({
  display: "flex",
  gap: "1rem",

  "@media": {
    [media.sm]: {
      flexDirection: "column",
    },
    [media.mdAndUp]: {
      flexDirection: "row",
    },
  },
});

globalStyle(`${techAndFeedbackContainer} > *`, {
  width: "50%",
});

export const techContainer = style({ display: "flex", flex: 1 });

export const otherContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "1.5rem",
});

export const techListItem = style({
  marginTop: "0.5rem",
  ...text.size.sm,
});

export const techSubList = style({ marginLeft: "0.5rem" });

export const techSubListItem = style({
  ...text.size.xs,
  display: "inline-block",
  marginRight: "0.5rem",
});
