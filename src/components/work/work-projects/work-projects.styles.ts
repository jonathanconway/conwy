import {
  cn,
  flex,
  flex_row,
  gap_1,
  items_center,
  leading_6,
  text_xs,
} from "@jonathanconway/tailwindjs";

export const container = cn();

export const item = cn(flex, flex_row, gap_1, items_center);

export const title = cn(text_xs, leading_6);
