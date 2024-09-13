import {
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_bold,
  gap_1,
  gap_2,
  gap_4,
  group_name,
  hidden,
  hover,
  justify_center,
  opacity_50,
  overflow_hidden,
  p_1,
  relative,
  rounded_md,
  sm,
  text_ellipsis,
  text_sm,
  text_stone_50,
  text_stone_950,
  text_xs,
  underline,
  w_full,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../../label/label.styles";
import * as listItemStyles from "../../list-item/list-item.styles";

export const navsContainer = cn(flex, flex_col, sm(flex_row), flex_1, gap_2);

const containerWidth = cn(w_full);

export const containerEmpty = cn(
  hidden,
  sm(flex),

  rounded_md,

  containerWidth,

  p_1,

  bg_stone_200,
  dark(bg_stone_800),
  opacity_50,
);

export const navContainer = cn(
  rounded_md,
  border,
  border_stone_300,
  dark(border_stone_700),
  relative,

  containerWidth,

  flex,
  flex_row,
  gap_4,

  hover(bg_stone_200),
  hover(dark(bg_stone_800)),

  p_1,

  text_stone_950,
  dark(text_stone_50),
  hover(text_stone_950),
  hover(dark(text_stone_50)),
);

export const mainColumn = cn(
  flex,
  flex_col,
  flex_1,
  gap_1,
  justify_center,
  overflow_hidden,
);

export const asideColumn = listItemStyles.asideColumn;

export const label = labelStyles.label;

export const title = cn(
  font_bold,
  group_name(hover.name, underline),
  text_xs,
  sm(text_sm),
  text_ellipsis,
  overflow_hidden,
);
