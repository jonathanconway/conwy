import { style } from "@vanilla-extract/css";

import { cn } from "../../framework/client";
import { text } from "../styling";
import { vars } from "../theme";

export const sizeSmall = style(text.size.sm);
export const sizeXSmall = style(text.size.xs);
export const sizeLG = style(text.size.lg);

export const size = {
  small: sizeSmall,
  xsmall: sizeXSmall,
  lg: sizeLG,
};

export const colorBody = style({
  color: vars.text.body.color,
});

export const color = {
  body: colorBody,
};

export const summary = size.small;

export const body = cn(
  size.small,
  color.body,
  style({
    marginTop: "1rem" /* 16px */,
  }),
);
