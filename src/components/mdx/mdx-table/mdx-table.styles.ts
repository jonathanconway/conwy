import {
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  mt_4,
  p_3,
  rounded_md,
  text_sm,
} from "@jonathanconway/tailwindjs";

export const table = cn(
  mt_4,
  text_sm,
  rounded_md,
  border,
  border_stone_300,
  dark(border_stone_700),
  p_3,
);
