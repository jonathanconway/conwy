import { globalStyle, style } from "@vanilla-extract/css";

import * as iconMixins from "../../icon/icon.mixins";
import { colors, media, text } from "../../styling";
import { vars } from "../../theme";

export const mobileCollapsibleContainer = style({
  border: "none",

  "@media": {
    [media.sm]: {
      display: "flex",
      gap: "0.5rem",
      flexDirection: "column",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: colors.stone_300,
    },
  },
});

export const checkbox = style({
  display: "none",
});

export const expandButton = style({
  ...iconMixins.iconContainer,
});

export const collapseButton = style({
  ...iconMixins.iconContainer,
});

export const header = style({
  display: "none",

  "@media": {
    [media.sm]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "0.5rem" /* 8px */,
      paddingRight: "0.5rem" /* 8px */,
      paddingTop: "0.25rem" /* 4px */,
      paddingBottom: "0.25rem" /* 4px */,
    },
  },
});

export const title = style({
  textTransform: "uppercase",
  color: vars.label.color,
  ...text.size.sm,
  fontWeight: 500,
});

export const content = style({
  "@media": {
    [media.sm]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});

globalStyle(`${checkbox} ~ ${content}`, {
  "@media": {
    [media.sm]: {
      display: "none",
    },
  },
});

globalStyle(`${checkbox}:not(:checked) ~ ${header} ${expandButton}`, {
  display: "none",
});

globalStyle(`${checkbox}:checked ~ ${header} ${collapseButton}`, {
  display: "none",
});

globalStyle(`${checkbox}:checked ~ ${content}`, {
  display: "flex",
});

globalStyle(`${checkbox} ~ ${header}`, {
  display: "none",
  "@media": {
    [media.sm]: {
      display: "flex",
    },
  },
});
