import { cn } from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import * as headingStyles from "../../heading/heading.css";
import * as textStyles from "../../text/text.css";

export const container = cn();

export const h2 = cn(
  headingStyles.h2,
  style({
    marginTop: 0,
  }),
);

export const bodyText = textStyles.body;
