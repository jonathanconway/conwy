import { globalStyle, style } from "@vanilla-extract/css";

export const mdxDivCustomChecklistBody = style({
  marginTop: "1.25rem",
});

// Hide headings where all list items under the heading are hidden.
// That is, headings whose immediate `ul` sibling has 0 `li` elements.
// This will be due to being excluded by the current filter.
globalStyle(
  [
    `${mdxDivCustomChecklistBody} h1:not(:has(+ ul li))`,
    `${mdxDivCustomChecklistBody} h2:not(:has(+ ul li))`,
    `${mdxDivCustomChecklistBody} h3:not(:has(+ ul li))`,
    `${mdxDivCustomChecklistBody} h4:not(:has(+ ul li))`,
    `${mdxDivCustomChecklistBody} h5:not(:has(+ ul li))`,
  ].join(", "),
  {
    display: "none",
  },
);
