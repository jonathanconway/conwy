import { globalStyle, style } from "@vanilla-extract/css";

export const checklistContainer = style({
  marginTop: "1.25rem",
});

// Hide headings where all list items under the heading are hidden.
// That is, headings whose immediate `ul` sibling has 0 `li` elements.
// This will be due to being excluded by the current filter.
globalStyle(
  [
    `${checklistContainer} h1:not(:has(+ h2:has(+ ul li)))`,
    `${checklistContainer} h2:not(:has(+ ul li))`,
    `${checklistContainer} h3:not(:has(+ ul li))`,
    `${checklistContainer} h4:not(:has(+ ul li))`,
    `${checklistContainer} h5:not(:has(+ ul li))`,
  ].join(", "),
  {
    display: "none",
  },
);
