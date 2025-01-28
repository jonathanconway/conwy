import { globalStyle, style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";

export const row = style({
  display: "inline-flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignContent: "center",
});

globalStyle(`${row} > *`, {
  // display: "contents",
});

export const linksList = style({
  display: "inline-flex",
  flexDirection: "row",
  gap: "0.5rem",
  listStyle: "none",
});

export const linksListItem = style({
  ...linkMixins.link,
  display: "contents",

  selectors: {
    ["&:not(:first-child):before"]: {
      content: "•",
    },
  },
});
