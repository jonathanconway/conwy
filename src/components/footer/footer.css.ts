import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import { xsmall } from "../text/text.css";
import { vars } from "../theme";

export const left = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.5rem",
});

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "1rem" /* 16px */,
  backgroundColor: vars.footer.background.color,
  color: vars.footer.color || undefined,
});

export const row = cn(
  style({
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  }),
  xsmall,
);

export const link = style({
  textDecorationLine: "underline",
});
