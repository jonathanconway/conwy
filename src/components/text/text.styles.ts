import {
  cn,
  dark,
  leading_6,
  mt_4,
  text_sm,
  text_stone_50,
  text_stone_950,
} from "@jonathanconway/tailwindjs";

export const text = cn(text_stone_950, dark(text_stone_50));

export const summaryText = cn(text, leading_6, text_sm);

export const bodyText = cn(text, mt_4, leading_6, text_sm);
