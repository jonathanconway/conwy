import {
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  p_3,
  rounded_md,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  rounded_md,
  border,
  border_stone_300,
  dark(border_stone_700),
  p_3,
);
