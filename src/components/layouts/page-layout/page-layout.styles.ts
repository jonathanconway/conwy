import {
  cn,
  flex,
  flex_1,
  flex_col,
  gap_4,
  gap_8,
  h_full,
  m_auto,
  max_w_full,
  min_h_screen,
  pb_6,
  px_4,
  px_8,
  py_4,
  py_10,
  sm,
  w_arbitrary,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  flex,
  flex_col,

  m_auto,
  max_w_full,
  h_full,
  min_h_screen,
  w_arbitrary("65rem"),

  sm(pb_6),
  px_4,
  sm(px_8),

  gap_8,
);

export const mainWrapper = cn(flex, flex_col, flex_1, gap_4);

export const footerWrapper = cn(py_4, sm(py_10));
