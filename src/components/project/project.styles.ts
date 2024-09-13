import {
  all,
  cn,
  flex,
  flex_1,
  flex_col,
  flex_row,
  gap_2,
  gap_4,
  gap_6,
  gap_8,
  leading_5,
  mt_0,
  mt_2,
  pr_0,
  relative,
  sm,
  text_sm,
} from "@jonathanconway/tailwindjs";

export const container = cn(relative, flex, flex_col, gap_8);

export const main = cn(flex, flex_1, flex_col, sm(flex_row), gap_4);

export const header = cn(flex, flex_row, gap_4);

export const headerLeft = cn(
  flex,
  flex_1,

  flex_col,

  gap_2,
);

export const headerRight = cn(flex_1);

export const client = mt_0;

export const blurb = cn(text_sm, flex_1);

export const body = cn(flex_1);

export const blurbContent = cn(all(mt_2), all(pr_0), all(leading_5));

export const aside = cn(flex, flex_1, flex_col, gap_6);

export const techAndFeedbackContainer = cn(flex, flex_col, sm(flex_row), gap_4);

export const techContainer = cn(flex, flex_1);

export const otherContainer = cn(flex, flex_col, flex_1, gap_6);

export const imageCascadeContainer = cn();
