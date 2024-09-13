import {
  bg_stone_200,
  bg_stone_800,
  cn,
  dark,
  first,
  flex,
  flex_1,
  flex_col,
  flex_row,
  gap_2,
  items_center,
  p_4,
  pt_0,
  pt_4,
  text_stone_200,
  text_xs,
  underline,
} from "@jonathanconway/tailwindjs";

export const left = cn(flex, flex_col, flex_1);

export const container = cn(
  flex,
  flex_row,
  items_center,
  p_4,
  bg_stone_200,
  dark(bg_stone_800),
);

export const row = cn(
  pt_4,
  first(pt_0),
  text_xs,
  flex,
  flex_row,
  gap_2,
  dark(text_stone_200),
);

export const link = cn(underline);

export const right = cn();
