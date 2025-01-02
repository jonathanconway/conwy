import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../../link/link.mixins";

export const list = style({
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  gap: "0.25rem" /* 4px */,
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const listItem = style({
  display: "flex",
});

export const listItemSelected = style({
  fontWeight: 700,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const link = style({
  ...linkMixins.link,
  overflow: "hidden",
  textOverflow: "ellipsis",
});
