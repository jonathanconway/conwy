import { style } from "@vanilla-extract/css";

import { colors, media, rounded } from "../../styling";
import { vars } from "../../theme";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem" /* 12px */,
  "@media": {
    [media.sm]: {
      flexDirection: "row",
      marginBottom: "1rem" /* 16px */,
    },
  },
});

export const tagFilter = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem" /* 4px */,
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
});

export const tagFilterBox = style({
  display: "inline-block",
  width: "0.75rem" /* 12px */,
  height: "0.75rem" /* 12px */,
  ...rounded.regular,
  backgroundColor: colors.stone_500,
});

export const tagFilterBoxSelected = style({
  backgroundColor: vars.articlesTagFilters.tagFilterBox.selected.color,
});

export const tagFilterLabel = style({
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});
