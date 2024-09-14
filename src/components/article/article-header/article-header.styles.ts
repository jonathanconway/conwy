import {
  border,
  border_stone_400,
  cn,
  flex,
  flex_col,
  font_semibold,
  gap_2,
  gap_3,
  mb_8,
  mr_3,
  px_1,
  py_0_5,
  rounded,
  text_2xl,
  text_xs,
} from "@jonathanconway/tailwindjs";

export const container = cn(flex, flex_col, mb_8, gap_3);

export const title = cn(text_2xl, font_semibold);

export const line1 = cn(flex, gap_2, text_xs);

export const tags = cn(text_xs);

export const tag = cn(mr_3, py_0_5, px_1, border, border_stone_400, rounded);
