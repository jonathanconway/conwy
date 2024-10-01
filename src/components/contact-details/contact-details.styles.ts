import {
  cn,
  flex,
  flex_col,
  flex_row,
  gap_1,
  gap_2,
  gap_4,
  inline_flex,
  items_center,
  items_start,
  mt_4,
  text_sm,
} from "@jonathanconway/tailwindjs";

import * as linkStyles from "../link/link.styles";

export const container = cn(mt_4, flex, flex_col, items_start, gap_4, text_sm);

export const item = cn(inline_flex, items_center, gap_2);

export const link = cn(
  linkStyles.link,

  inline_flex,
  flex_row,
  items_center,
  gap_1,
);

export const linkIcon = cn(linkStyles.linkIcon);
