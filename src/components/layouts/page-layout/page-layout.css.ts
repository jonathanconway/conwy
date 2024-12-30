import {
  cn,
  flex,
  flex_1,
  flex_col,
  gap_4,
  gap_8,
  h_full,
  m_auto,
  max_w_full,
  min_h_screen,
  pb_6,
  px_4,
  px_8,
  py_4,
  py_10,
  sm,
  w_arbitrary,
} from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import { media } from "../../styling";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "65rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  gap: "2rem",

  "@media": {
    [media.sm]: {
      paddingBottom: "1.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
});

export const mainWrapper = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1rem",
});

export const footerWrapper = style({
  paddingTop: "1rem" /* 16px */,
  paddingBottom: "1rem" /* 16px */,

  "@media": {
    [media.sm]: {
      paddingTop: "2.5rem" /* 16px */,
      paddingBottom: "2.5rem" /* 16px */,
    },
  },
});
