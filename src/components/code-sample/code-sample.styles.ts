import {
  all,
  bg_stone_200,
  bg_stone_800,
  border,
  border_none,
  border_stone_400,
  cn,
  dark,
  my_4,
  p_4,
  rounded_md,
  text_sm,
  whitespace_pre_wrap,
} from "@jonathanconway/tailwindjs";

export const code = cn(whitespace_pre_wrap, all(border_none));

export const pre = cn(
  my_4,
  p_4,
  bg_stone_200,
  dark(bg_stone_800),
  border,
  border_stone_400,
  rounded_md,
  all(whitespace_pre_wrap),
  text_sm,
);
