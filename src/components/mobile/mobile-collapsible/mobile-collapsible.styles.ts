import {
  border,
  border_none,
  border_stone_300,
  cn,
  dark,
  flex,
  flex_row,
  font_medium,
  items_center,
  justify_between,
  p_0,
  pb_2,
  pl_2,
  pr_2,
  px_2,
  py_1,
  sm,
  text_sm,
  text_stone_300,
  text_stone_500,
  text_xs,
  uppercase,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../../label";

export const mobileCollapsibleContainer = cn(
  border,
  border_stone_300,
  sm(border_none),
);

export const input = cn();

export const header = cn(
  flex,
  flex_row,
  items_center,
  justify_between,
  px_2,
  py_1,
);

export const title = cn(
  uppercase,
  text_stone_500,
  dark(text_stone_300),
  text_sm,
  font_medium,
);

export const expandCollapseButton = cn();

export const content = cn(pl_2, pr_2, pb_2, sm(p_0));
