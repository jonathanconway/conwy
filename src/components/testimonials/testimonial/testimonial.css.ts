import { style } from "@vanilla-extract/css";

import { text } from "../../styling";

export const feedbackItemQuote = style({
  ...text.size.sm,
  lineHeight: "1.25rem",
});

export const feedbackItemAuthor = style({
  // marginTop: "0.25rem",
  ...text.size.xs,
});

export const feedbackItemDate = style({
  // marginTop: "0.25rem",
  ...text.size.xs,
});
