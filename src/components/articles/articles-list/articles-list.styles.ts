import {
  cn,
  flex,
  flex_row,
  flex_wrap,
  gap_4,
  items_baseline,
  items_center,
  mt_0,
  mt_4,
} from "@jonathanconway/tailwindjs";

import * as headingStyles from "../../heading/heading.styles";

export const h2 = cn(mt_0, headingStyles.h2);

export const articles = cn(
  flex,
  flex_row,
  flex_wrap,
  items_baseline,
  gap_4,
  items_center,
  mt_4,
);
