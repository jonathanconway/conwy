import { style } from "@vanilla-extract/css";

import { linkBox } from "../../link-box/link-box.mixins";

export const booksListItem = style({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
});

export const bookLinkBox = style({
  ...linkBox,
  flexDirection: "column",
  gap: "0.25rem",

  "@media": {},
});
