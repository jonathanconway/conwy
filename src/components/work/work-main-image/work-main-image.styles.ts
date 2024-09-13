import {
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  rounded_md,
  w_arb,
} from "@jonathanconway/tailwindjs";

export const image = cn(
  rounded_md,
  w_arb("6rem"),
  border,
  border_stone_300,
  dark(border_stone_700),
);
