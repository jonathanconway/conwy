import {
  cn,
  flex,
  flex_col,
  gap_2,
  inline_block,
  ml_2,
  mr_2,
  text_sm,
  text_xs,
} from "@jonathanconway/tailwindjs";

export const techCategory = "";

export const techList = cn(flex, flex_col, gap_2);

export const techListItem = cn(text_sm);

export const techSubList = cn(ml_2);

export const techSubListItem = cn(text_xs, inline_block, mr_2);
