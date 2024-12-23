import {
  all,
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  cn,
  dark,
  first,
  m_4,
  mt_0,
  my_4,
  p_4,
  pt_0,
  rounded,
  rounded_md,
} from "@jonathanconway/tailwindjs";

export const aside = cn(
  p_4,
  m_4,
  my_4,
  rounded,
  rounded_md,
  border,
  border_stone_400,

  bg_stone_200,
  dark(bg_stone_800),

  all(first(pt_0)),
  all(first(mt_0)),
);
