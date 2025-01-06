import { style } from "@vanilla-extract/css";

import { linkBox } from "../../link-box/link-box.mixins";
import { media } from "../../styling";

export const booksList = style({
  paddingLeft: "0 !important",
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

export const booksListItem = style({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
});

export const bookLinkBox = style({
  ...linkBox,
  flexDirection: "column",
  gap: "0",

  "@media": {},
});
