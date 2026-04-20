import { globalStyle, style } from "@vanilla-extract/css";

export const checklistUl = style({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  marginTop: "1rem",
  gap: "0.25rem",

  // Hide lists which have no list items.
  // This will be due to being excluded by the current filter.
  selectors: {
    "&:not(:has(li))": {
      display: "none",
    },
  },
});
