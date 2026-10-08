import { globalStyle, style } from "@vanilla-extract/css";

import * as iconMixins from "../../icon/icon.mixins";
import { text } from "../../styling";
import * as textMixins from "../../text/text.mixins";

export const workProjectsList = style({
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

export const workProjectsListItem = style({
  ...textMixins.liSmall,
  margin: 0,
  listStyle: "none",
  lineHeight: "1.2rem",
  display: "inline-flex",
});

export const workProjectsListItemTitle = style({
  ...text.size.xs,
  lineHeight: "1rem",
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
