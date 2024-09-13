import {
  cn,
  flex,
  flex_col,
  flex_row,
  gap_2,
  invisible,
  leading_5,
  mt_1,
  text_xs,
  w_full,
  whitespace_pre_line,
} from "@jonathanconway/tailwindjs";

export const feedbackCarouselContainer = cn(flex, flex_col, gap_2);

export const feedbackItems = cn(flex, flex_row);

export const feedbackItem = (isSelected: boolean) =>
  cn(w_full, ...(isSelected ? [] : [invisible, "ml-[-100%]"]));

export const feedbackItemQuote = cn(text_xs, whitespace_pre_line, leading_5);

export const feedbackItemAuthor = cn(mt_1, text_xs);

export const switchButtonsContainer = cn(flex, flex_row, gap_2);
