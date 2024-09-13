import {
  bg_stone_300,
  bg_stone_800,
  cn,
  cursor_pointer,
  dark,
  flex_1,
  hidden,
  inline_flex,
  items_center,
  justify_center,
  p_1,
  px_2,
  py_1,
  rounded,
  rounded_full,
  text_xs,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  inline_flex,

  p_1,
  rounded,
  rounded_full,

  bg_stone_300,
  dark(bg_stone_800),
);

export const optionContainer = cn(
  inline_flex,
  flex_1,
  items_center,
  justify_center,

  rounded,
  rounded_full,

  `has-[:checked]:bg-purple-900`,
  `has-[:checked]:text-white`,

  dark(`has-[:checked]:bg-purple-900`),
  dark(`has-[:checked]:text-black`),
);

export const optionInput = cn(hidden);

export const optionText = cn(px_2, py_1, text_xs, cursor_pointer, inline_flex);
