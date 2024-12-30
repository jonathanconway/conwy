import { cn } from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import * as listItemStyles from "../../../list-item/list-item.styles";
import { rounded } from "../../../styling";
import { vars } from "../../../theme";

export const container = cn(listItemStyles.container);

export const mainColumn = listItemStyles.mainColumn;

export const asideColumn = listItemStyles.asideColumn;

export const image = style({
  ...rounded.md,
});

export const title = style({
  fontWeight: "bold",
  ":hover": {
    textDecoration: "underline",
  },
});

export const date = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});

export const blurb = style({
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const type = style({
  position: "absolute",
  display: "inline-block",
  bottom: "0.75rem" /* 12px */,
  right: "0.75rem" /* 12px */,
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
  color: vars.articlesListItem.type.color,
  fontWeight: 500,
  textTransform: "uppercase",
});
