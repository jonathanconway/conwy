import {
  cn,
  flex_row,
  gap_1,
  inline_flex,
  items_center,
  text_sm,
} from "@jonathanconway/tailwindjs";

import * as linkStyles from "../../../link/link.styles";

export const link = cn(
  linkStyles.link,

  inline_flex,
  flex_row,
  items_center,
  gap_1,
);

export const linkIcon = cn(linkStyles.linkIcon);

export const linkText = cn(text_sm);
