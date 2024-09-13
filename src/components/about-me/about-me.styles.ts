import {
  border_2,
  border_b,
  border_stone_300,
  border_stone_700,
  border_stone_900,
  cn,
  dark,
  flex,
  flex_row,
  gap_6,
  items_start,
  mt_4,
  my_10,
  pb_10,
  rounded_full,
  w_14,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  my_10,

  flex,
  flex_row,
  gap_6,
  items_start,
  pb_10,

  border_b,
  border_stone_300,
  dark(border_stone_700),
);

export const face = cn(
  w_14,
  rounded_full,
  border_2,
  border_stone_900,
  dark(border_stone_700),
  mt_4,
);
