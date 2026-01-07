import { style } from "@vanilla-extract/css";

import { boxBorderStructural } from "../../../box/box.mixins";
import { link } from "../../../link/link.mixins";

export const booksListItem = style({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
});

export const bookLinkBoxInner = style({
  flexDirection: "column",
  gap: "0.25rem",
  flex: 1,
});

export const bookNotesLink = style({
  ...link,
  borderLeft: `solid 1px ${boxBorderStructural.borderColor}`,
  marginLeft: "0.25rem",
  paddingLeft: "0.25rem",
});
