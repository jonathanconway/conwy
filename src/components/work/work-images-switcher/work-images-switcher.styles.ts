import {
  bg_black,
  bg_white,
  border_2,
  border_blue_500,
  border_stone_300,
  border_stone_700,
  cn,
  cursor_pointer,
  dark,
  flex,
  flex_col,
  flex_row,
  gap_2,
  gap_4,
  h_full,
  hover,
  items_center,
  items_start,
  justify_center,
  overflow_hidden,
  p_0_5,
  p_1_5,
  relative,
  rounded_lg,
  rounded_md,
  w_48,
  w_full,
} from "@jonathanconway/tailwindjs";

export const container = cn(relative, flex, flex_row, items_start, gap_4);

const imageBase = cn(bg_white, dark(bg_black), border_2, rounded_md);

export const imagesNav = cn(flex, flex_col, gap_2);

export const imagesNavItem = (isSelected: boolean) =>
  cn(
    imageBase,
    w_48,
    flex,
    items_center,
    justify_center,
    overflow_hidden,
    cursor_pointer,
    p_0_5,
    hover(isSelected ? border_blue_500 : border_stone_700),
    isSelected ? border_blue_500 : border_stone_300,
  );

export const imagesNavItemImage = cn(h_full, p_0_5, rounded_md);

export const selectedItem = cn(imageBase, w_full);

export const selectedItemImage = cn(
  w_full,
  rounded_lg,
  p_1_5,
  border_2,
  border_stone_300,
  bg_white,
  overflow_hidden,
);
