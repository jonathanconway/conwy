import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

export const toolbarContainer = style({
  position: "absolute",
  top: 0,
  right: 0,
  padding: "1rem",
  opacity: 0.25,

  ":hover": {
    opacity: 1,
  },

  ":focus-within": {
    opacity: 1,
  },
});

export const contentContainer = style({});

// todo: find a way to override without !important
globalStyle(`${contentContainer} > *`, {
  paddingRight: "2rem !important",
});
