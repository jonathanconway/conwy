import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import * as textMixins from "../../text/text.mixins";

export const row = style({
  display: "inline-flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignContent: "center",
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

export const headingStyle = style({
  ...textMixins.h5,
  fontWeight: "500",
});
