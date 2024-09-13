import {
  bg_left,
  bg_right,
  cn,
  flex,
  flex_1,
  group,
  h_2,
  hover,
  lowercase,
  px_2,
  py_2,
  relative,
  text_lg,
  text_stone_400,
  w_full,
} from "@jonathanconway/tailwindjs";

export const link = cn(relative, lowercase, py_2, group, hover(text_stone_400));

export const text = cn(text_lg, px_2);

export const activeIndicator = cn(w_full, flex, h_2);

export const activeIndicatorLeft = cn(flex_1, bg_left, h_2);

export const activeIndicatorRight = cn(flex_1, bg_right, h_2);
