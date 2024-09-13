import {
  absolute,
  cn,
  invisible,
  leading_6,
  mt_4,
  neg,
  text_sm,
  top_0,
} from "@jonathanconway/tailwindjs";

import * as headingStyles from "../../heading/heading.styles";

export const container = cn(mt_4);

export const topHeading = cn(absolute, neg(top_0), invisible, headingStyles.h2);

export const content = cn(leading_6, text_sm);
