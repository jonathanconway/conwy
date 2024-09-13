import {
  absolute,
  bg_black,
  bg_stone_700,
  bg_white,
  border,
  border_2,
  border_black,
  border_gray_600,
  border_stone_300,
  border_stone_700,
  border_yellow_400,
  bottom_0,
  cn,
  dark,
  fixed,
  flex,
  flex_col,
  flex_row,
  font_bold,
  gap_2,
  gap_4,
  gap_8,
  h_6,
  inline_block,
  inline_flex,
  items_center,
  justify_between,
  justify_center,
  leading_6,
  left_0,
  left_3,
  left_7,
  m_4,
  m_auto,
  max_h_arb,
  mb_4,
  neg,
  order_1,
  order_2,
  overflow_scroll,
  p_1_5,
  p_4,
  pl_2,
  pl_4,
  pl_6,
  pt_0_5,
  relative,
  right_0,
  rounded,
  rounded_full,
  rounded_lg,
  shadow,
  shadow_md,
  sm,
  text_black,
  text_sm,
  text_white,
  text_xl,
  top_0,
  w_6,
  w_60,
  w_arb,
  z_0,
  z_10,
} from "@jonathanconway/tailwindjs";

export const imageModalBackdrop = cn(
  fixed,
  flex,
  top_0,
  bottom_0,
  left_0,
  right_0,
  z_0,
  `bg-black/50`,
  // `${bg_black}/${_25}`, // todo : add _25 to tailwindjs
);

export const imageModal = cn(
  relative,

  flex,
  flex_col,
  gap_4,

  z_10,
  m_auto,
  p_4,

  rounded_lg,
  bg_white,
  dark(bg_black),
  border,
  border_gray_600,
);

export const imageModalHeader = cn(flex, flex_col, sm(flex_row));

export const imageModalTitle = cn(text_xl, font_bold, order_1, sm(order_2));

export const imageModalButtonsContainer = cn(
  sm(absolute),

  mb_4,
  sm(m_4),
  top_0,
  right_0,

  flex,
  justify_between,
  gap_2,
);

export const imageModalCloseButton = cn(
  rounded,
  inline_block,
  w_6,
  h_6,
  leading_6,
  text_sm,
  border,
  border_black,
  text_black,
);

export const imageModalMain = cn(flex, flex_col, sm(flex_row), gap_8);

export const imageContainer = cn(relative, max_h_arb("80vh"), overflow_scroll);

export const image = cn(
  w_arb("600px"),

  p_1_5,

  rounded_lg,
  border_2,
  border_stone_300,
  dark(border_stone_700),
  bg_white,
  dark(bg_black),
);

export const noteHotspot = cn(
  text_sm,
  absolute,

  bg_stone_700,
  border_yellow_400,
  border_2,
  shadow,
  shadow_md,

  w_6,
  h_6,
  rounded_full,
  inline_flex,
  items_center,
  justify_center,

  text_white,
  font_bold,
);

export const notesContainer = (hasHotspots: boolean) =>
  cn(hasHotspots ? pl_4 : "", flex, flex_col, gap_4, w_60);

export const noteText = (hasHotspots: boolean) =>
  cn(text_sm, hasHotspots ? cn(pl_6, sm(pl_2)) : "", relative, pt_0_5);

export const noteNumber = cn(
  absolute,

  neg(left_3),
  sm(neg(left_7)),

  bg_stone_700,
  border_yellow_400,
  border_2,
  shadow,
  shadow_md,

  w_6,
  h_6,
  rounded_full,
  inline_flex,
  items_center,
  justify_center,

  font_bold,
  text_white,
  text_sm,
);
