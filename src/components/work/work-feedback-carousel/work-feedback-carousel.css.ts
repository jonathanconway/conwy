import { style } from "@vanilla-extract/css";

import { text } from "@/components/styling";

export const feedbackItemQuote = style({
  ...text.size.xs,
  lineHeight: "1.25rem",
});

export const feedbackItemAuthor = style({
  marginTop: "0.25rem",
  ...text.size.xs,
});
