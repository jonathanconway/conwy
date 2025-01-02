import {
  cn,
  flex,
  flex_1,
  flex_col,
  flex_row,
  gap_4,
  gap_6,
  sm,
} from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import { responsive, text } from "../styling";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const main = style({
  display: "flex",
  flex: 1,
  gap: "1rem",
  ...responsive.flexDirectionColumnMobileRowElse,
});

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
});

export const headerLeft = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "0.5rem",
});

export const headerRight = style({
  flex: 1,
});

export const client = style({
  marginTop: 0,
});

export const blurb = style({
  ...text.size.sm,
  flex: 1,
});

export const body = style({
  flex: 1,
});

export const blurbContent = style({});

//  cn(all(mt_2), all(pr_0), all(leading_5));

export const aside = cn(flex, flex_1, flex_col, gap_6);

export const techAndFeedbackContainer = cn(flex, flex_col, sm(flex_row), gap_4);

export const techContainer = cn(flex, flex_1);

export const otherContainer = cn(flex, flex_col, flex_1, gap_6);

export const imageCascadeContainer = cn();
