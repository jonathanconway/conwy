import { style } from "@vanilla-extract/css";

import * as listItemMixins from "../../../list/list-item/list-item.mixins";

export const workPageColleaguesList = style({
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
});

export const workPageColleaguesListItem = style({
  ...listItemMixins.listItemSmall,
  margin: 0,
  listStyle: "none",
  lineHeight: "1.2rem",
  display: "inline-flex",
});
