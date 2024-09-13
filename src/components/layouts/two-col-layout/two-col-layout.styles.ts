import {
  cn,
  flex,
  flex_1,
  flex_col,
  flex_row,
  gap_8,
  sm,
} from "@jonathanconway/tailwindjs";

export const container = cn(flex, flex_col, sm(flex_row), gap_8);

export const column = cn(flex_1);
