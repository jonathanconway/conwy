import { style } from "@vanilla-extract/css";

import { cn } from "../../framework/client";
import { vars } from "../theme";

export const sizeSmall = style({
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});

export const sizeXSmall = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});

export const size = {
  small: sizeSmall,
  xsmall: sizeXSmall,
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
