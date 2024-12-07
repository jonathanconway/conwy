import {
  bg_stone_500,
  bg_violet_300,
  bg_violet_500,
  cn,
  cursor_pointer,
  dark,
  flex,
  flex_col,
  flex_row,
  gap_1,
  gap_3,
  h_3,
  inline_block,
  items_center,
  mb_4,
  rounded,
  select_none,
  sm,
  text_sm,
  w_3,
} from "@jonathanconway/tailwindjs";

export const container = cn(flex, flex_col, sm(flex_row), gap_3, sm(mb_4));

export const tagFilter = cn(
  flex,
  flex_row,
  gap_1,
  items_center,
  cursor_pointer,
  select_none,
);

export const tagFilterBox = (selected: boolean) =>
  cn(
    inline_block,
    w_3,
    h_3,
    rounded,
    ...(selected ? [bg_violet_500, dark(bg_violet_300)] : [bg_stone_500]),
  );

export const tagFilterLabel = cn(text_sm);
