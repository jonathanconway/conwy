import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as buttonStyles from "../button/button.css";
import { rounded } from "../styling";

export const iconButtonBase = cn(
  buttonStyles.buttonBase,
  style({
    display: "inline-flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    ...rounded.regular,
    borderWidth: "1px",
    width: "1.5rem",
    height: "1.5rem",
    padding: "0.25rem",
  }),
);

export const iconButtonSelected = buttonStyles.buttonSelected;

export const iconButtonUnselected = buttonStyles.buttonUnselected;

export const icon = style({
  pointerEvents: "none",
});

export const iconButtonDisabled = style({
  opacity: 0.3,
});
