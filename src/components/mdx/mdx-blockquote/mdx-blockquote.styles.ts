import {
  all,
  bg_stone_200,
  bg_stone_800,
  border_l,
  border_l_8,
  border_stone_400,
  cn,
  dark,
  first,
  inline_block,
  my_4,
  p_4,
  pb_4,
  pt_0,
} from "@jonathanconway/tailwindjs";

export const blockquote = cn(
  inline_block,
  my_4,
  p_4,
  pb_4,
  bg_stone_200,
  dark(bg_stone_800),
  border_l,
  border_stone_400,
  border_l_8,
  all(first(pt_0)),
);
