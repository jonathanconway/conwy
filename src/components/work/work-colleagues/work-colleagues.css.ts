import { globalStyle, style } from "@vanilla-extract/css";

import * as listItemMixins from "../../list/list-item/list-item.mixins";

export const workColleaguesList = style({
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
});

export const workColleaguesListItem = style({
  ...listItemMixins.listItemSmall,
  margin: 0,
  listStyle: "none",
  lineHeight: "1.2rem",
  display: "inline-flex",
});

export const icon = style({
  width: "1rem",
  height: "1rem",
  display: "inline-block",
  verticalAlign: "middle",
  margin: 0,
  marginRight: "0.25rem",
});

globalStyle(`${icon} linearGradient`, {
  filter: "brightness(2)",
});
