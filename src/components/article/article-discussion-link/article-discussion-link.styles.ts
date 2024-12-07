import {
  cn,
  flex,
  flex_row,
  gap_4,
  items_center,
  mt_2,
  mt_8,
  text_xs,
} from "@jonathanconway/tailwindjs";

export const container = cn(mt_8);

export const discussion = cn(flex, flex_row, items_center, gap_4, mt_2);

export const count = cn(text_xs);
