import { globalStyle, style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const quotesList = style({
  paddingLeft: "0 !important",
  columnCount: 3,
  gap: "1rem",

  "@media": {
    [media.md]: {
      columnCount: 1,
    },
    [media.sm]: {
      columnCount: 1,
    },
  },
});

globalStyle(`${quotesList} li`, {
  overflow: "hidden",
});
