import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as textStyles from "../text/text.css";

export const container = cn(
  style({
    display: "flex",
  }),
  textStyles.size.small,
);
