import { globalStyle, style } from "@vanilla-extract/css";

import { colors, filters, media, rounded } from "../styling";
import { vars } from "../theme";

export const container = style({
  width: "100%",
  "@media": {
    [media.sm]: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flexWrap: "wrap",
    },
    [media.mdAndUp]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      columnGap: "0.5rem",
      rowGap: "0.5rem",
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
  whiteSpace: "nowrap",
});

export const tagFilterBox = style({
  display: "inline-block",
  width: "0.75rem" /* 12px */,
  height: "0.75rem" /* 12px */,
  ...rounded.regular,
  backgroundColor: colors.stone_500,
});

globalStyle(`${tagFilter}:hover ${tagFilterBox}`, {
  filter: filters.brightness_125,
});

export const tagFilterBoxSelected = style({
  backgroundColor: vars.articlesTagFilters.tagFilterBox.selected.color,
});

export const tagFilterLabel = style({
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const tagFilterLabelSelected = style({
  color: vars.articlesTagFilters.tagFilterLabel.selected.color,
});
