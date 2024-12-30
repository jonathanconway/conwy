import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import { rounded } from "../styling";
import * as textStyles from "../text/text.css";
import { vars } from "../theme";

export const code = cn(
  style({
    whiteSpace: "pre-wrap",
    ...rounded.md,
    borderWidth: "1px",
    borderColor: vars.code.border.color,
    paddingLeft: "0.375rem",
    paddingRight: "0.375rem",
  }),
  textStyles.sizeSmall,
);
