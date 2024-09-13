import {
  cn,
  flex,
  flex_col,
  flex_row,
  gap_6,
  items_center,
  items_start,
  relative,
  sm,
  w_40,
  w_auto,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  relative,
  flex,

  flex_col,
  sm(flex_row),

  sm(gap_6),

  items_center,
  sm(items_start),

  w_40,
  sm(w_auto),
);
