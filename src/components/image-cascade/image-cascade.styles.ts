import {
  absolute,
  bg_black,
  bg_white,
  border,
  border_2,
  border_gray_600,
  border_stone_300,
  border_stone_700,
  cn,
  cursor_pointer,
  dark,
  flex,
  flex_row,
  gap_2,
  h_40,
  hover,
  items_center,
  justify_center,
  overflow_hidden,
  p_1_5,
  pointer_events_none,
  relative,
  rounded,
  rounded_lg,
} from "@jonathanconway/tailwindjs";

export const imageCascade = cn(rounded_lg, border, border_gray_600);

export const container = cn(relative, h_40);

export const IMAGE_SIZE_PX = {
  width: 150,
  height: 100,
};

export const imageContainer = cn(
  absolute,

  rounded_lg,
  p_1_5,
  border_2,
  bg_white,

  border_stone_300,
  dark(border_stone_700),

  hover(border_stone_700),
  hover(dark(border_stone_300)),

  flex,
  items_center,
  justify_center,
  overflow_hidden,
  cursor_pointer,

  bg_white,
  dark(bg_black),
);

export const image = cn(rounded, pointer_events_none);

export const nav = cn(flex, flex_row, gap_2);
