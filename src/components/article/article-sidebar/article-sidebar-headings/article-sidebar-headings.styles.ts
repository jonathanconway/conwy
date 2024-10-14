import {
  cn,
  flex,
  flex_col,
  font_bold,
  gap_1,
  list_none,
  text_sm,
} from "@jonathanconway/tailwindjs";

export const list = cn(list_none, flex, flex_col, gap_1, text_sm);

export const listItem = cn(flex);

export const listItemSelected = cn(font_bold);
