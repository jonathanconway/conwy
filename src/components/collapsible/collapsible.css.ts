import { globalStyle, style } from "@vanilla-extract/css";

import { colors, text } from "../styling";
import { vars } from "../theme";

export const nonCollapsibleContainer = style({
  border: "none",
});

export const collapsibleContainer = style({
  border: "none",

  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: colors.stone_300,
});

export const checkbox = style({
  display: "none",
});

export const expandButton = style({});

export const collapseButton = style({});

export const collapsibleHeader = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "0.5rem" /* 8px */,
  paddingRight: "0.5rem" /* 8px */,
  paddingTop: "0.25rem" /* 4px */,
  paddingBottom: "0.25rem" /* 4px */,
});

export const title = style({
  textTransform: "uppercase",
  color: vars.label.color,
  ...text.size.sm,
  fontWeight: 500,
});

export const collapsibleContent = style({
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
});

globalStyle(`${checkbox} ~ ${collapsibleContent}`, {
  display: "none",
});

globalStyle(
  `${checkbox}:not(:checked) ~ ${collapsibleHeader} ${expandButton}`,
  {
    display: "none",
  },
);

globalStyle(`${checkbox}:checked ~ ${collapsibleHeader} ${collapseButton}`, {
  display: "none",
});

globalStyle(`${checkbox}:checked ~ ${collapsibleContent}`, {
  display: "flex",
});

globalStyle(`${checkbox} ~ ${collapsibleHeader}`, {
  display: "flex",
});
