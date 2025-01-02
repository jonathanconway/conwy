import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as linkStyles from "../link/link.css";
import { text } from "../styling";

export const container = cn(
  style({
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    alignItems: "flex-start",
    gap: "1rem",
    ...text.size.sm,
  }),
);

export const item = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const link = cn(
  linkStyles.link,
  style({
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
  }),
);

export const linkIcon = linkStyles.linkIcon;
