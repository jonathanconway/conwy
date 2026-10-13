import { globalStyle, style } from "@vanilla-extract/css";

import * as iconMixins from "../../icon/icon.mixins";
import * as listItemMixins from "../../list/list-item/list-item.mixins";
import * as textSizeMixins from "../../text/text-size/text-size.mixins";
import * as textWeightMixins from "../../text/text-weight/text-weight.mixins";

export const workProjectsList = style({
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

export const workProjectsListItem = style({
  ...listItemMixins.listItemSmall,
  margin: 0,
  listStyle: "none",
  lineHeight: "1.2rem",
  display: "inline-flex",
});

export const workProjectsListItemTitle = style({
  ...textSizeMixins.xs,
  ...textWeightMixins.body,
  flex: 1,
});

export const workProjectsListItemIcon = style({
  ...iconMixins.iconContainer,
  width: "1rem",
  height: "1rem",
  display: "inline-block",
  verticalAlign: "middle",
  margin: 0,
  marginRight: "0.25rem",
});

globalStyle(`${workProjectsListItemIcon} linearGradient`, {
  filter: "brightness(2)",
});
