import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const items = style({
  display: "flex",
  flexDirection: "row",
});

export const item = style({
  width: "100%",
});

export const itemUnselected = style({
  visibility: "hidden",
  marginLeft: "-100%",
});

export const itemSelected = style({});

// export const switchContainer = style({});

// export const feedbackCarouselContainer = cn(flex, flex_col, gap_2);

// export const feedbackItems = cn(flex, flex_row);

// export const feedbackItem = (isSelected: boolean) =>
//   cn(w_full, ...(isSelected ? [] : [invisible, "ml-[-100%]"]));

// export const feedbackItemQuote = cn(text_xs, whitespace_pre_line, leading_5);

// export const feedbackItemAuthor = cn(mt_1, text_xs);

// export const switchButtonsContainer = cn(flex, flex_row, gap_2);
