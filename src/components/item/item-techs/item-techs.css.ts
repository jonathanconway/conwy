import { style } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const techCategory = "";

export const techList = style({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const techListItem = style({
  ...textMixins.li,
  marginTop: 0,
});

export const techSubList = style({
  marginLeft: "0.5rem",
});

export const techSubListItem = style({
  ...textMixins.liSmall,
  display: "inline-block",
  marginRight: "0.5rem",
});
