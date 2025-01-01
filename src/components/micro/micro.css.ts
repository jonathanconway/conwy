import {
  absolute,
  bottom_3,
  cn,
  dark,
  font_bold,
  font_medium,
  group_name,
  h_14,
  h_full,
  hover,
  inline_block,
  right_3,
  rounded_md,
  text_sm,
  text_stone_400,
  text_stone_500,
  text_xs,
  underline,
  uppercase,
  w_full,
} from "@jonathanconway/tailwindjs";

import * as linkStyles from "../link/link.css";

export const image = cn(rounded_md, h_14, text_stone_400, dark(text_stone_500));

export const iconQuote = cn(w_full, h_full);

export const title = cn(font_bold, group_name(hover.name, underline));

export const date = cn(text_xs, hover(underline));

export const blurb = cn(text_sm);

export const mainLink = cn(linkStyles.link, text_xs);

export const type = cn(
  absolute,
  inline_block,
  text_xs,
  text_stone_400,
  dark(text_stone_500),
  font_medium,
  uppercase,
  bottom_3,
  right_3,
);
