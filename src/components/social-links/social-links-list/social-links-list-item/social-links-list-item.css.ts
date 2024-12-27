import { cn } from "@jonathanconway/tailwindjs";
import { style } from "@vanilla-extract/css";

import * as linkStyles from "../../../link/link.css";

export const link = cn(
  linkStyles.link,
  style({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.875rem" /* 14px */,
    lineHeight: "1.25rem" /* 20px */,
  }),
);
