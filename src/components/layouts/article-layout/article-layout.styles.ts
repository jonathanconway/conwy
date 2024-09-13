import {
  absolute,
  all,
  cn,
  flex,
  flex_row,
  gap_8,
  hidden,
  left_0,
  m_auto,
  ml_auto,
  mr_auto,
  mt_4,
  mt_28,
  mt_48,
  mx_0,
  pr_8,
  pt_10,
  px_4,
  px_8,
  py_4,
  py_10,
  right_0,
  sm,
  sticky,
  top_0,
  w_72,
  w_arbitrary,
  w_full,
} from "@jonathanconway/tailwindjs";

export const headerWrapper = cn(
  sm(absolute),
  sm(top_0),

  w_full,

  all(m_auto),
  all(sm(w_arbitrary("65rem"))),

  px_4,
  all(sm(px_8)),
);

export const mainWrapper = cn(
  mx_0,
  sm(ml_auto),
  sm(mt_28),

  sm(w_arbitrary("43rem")),

  sm(flex),
  sm(flex_row),
  sm(gap_8),

  px_4,
  sm(px_8),
);

export const asideWrapper = cn(
  hidden,
  sm(flex),

  sticky,

  top_0,

  sm(w_72),

  mt_48,
  mr_auto,

  pt_10,
  pr_8,
);

export const footerWrapper = cn(
  sm(absolute),
  left_0,
  right_0,

  mt_4,
  sm(mt_28),
  py_4,
  sm(py_10),
  sm(px_8),

  all(m_auto),
  all(sm(w_arbitrary("60rem"))),
);
