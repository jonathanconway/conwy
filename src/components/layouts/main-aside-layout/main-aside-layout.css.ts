import { style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const container = style({
  marginTop: "1rem",

  "@media": {
    [media.mdAndUp]: {
      display: "flex",
      flexDirection: "row",
      gap: "3rem",
    },
  },
});

export const main = style({
  "@media": {
    [media.lgAndUp]: {
      width: "70%",
    },
  },
});

export const aside = style({
  width: "30%",
  "@media": {
    [media.lessThanMd]: {
      display: "none",
    },
  },
});
