import { style } from "@vanilla-extract/css";

import { cn } from "../../framework/client";
import { vars } from "../theme";

export const linkDecoration = style({
  textDecorationColor: vars.link.text.decoration.color,
  ":hover": {
    textDecorationColor: vars.link.hover.text.decoration.color,
  },
});

export const linkContent = style({
  color: vars.link.text.color,
  ":hover": {
    color: vars.link.hover.text.color,
  },
});

export const link = cn(
  style({
    display: "inline",
    alignItems: "center",
    fontWeight: 500,
    cursor: "pointer",

    ":hover": {
      textDecorationLine: "underline",
    },
  }),

  linkDecoration,
  linkContent,
);

export const linkIcon = style({
  color: "inherit",
  paddingLeft: "0.125rem" /* 2px */,
});
