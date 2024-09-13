import {
  cn,
  dark,
  font_medium,
  sm,
  text_arb,
  text_stone_300,
  text_stone_500,
  text_xs,
  uppercase,
} from "@jonathanconway/tailwindjs";

export const label = cn(
  uppercase,
  text_stone_500,
  dark(text_stone_300),
  text_arb("0.6rem"),
  sm(text_xs),
  font_medium,
);
