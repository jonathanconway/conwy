import { style } from "@vanilla-extract/css";

import * as buttonStyles from "../button/button.css";
import * as buttonMixins from "../button/button.mixins";
import { rounded } from "../styling";

export const iconButtonBase = style({
  ...buttonMixins.buttonBase,
  display: "inline-flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  ...rounded.regular,
  borderWidth: "1px",
  width: "1.5rem",
  height: "1.5rem",
  padding: "0.25rem",
});

export const iconButtonSelected = buttonStyles.buttonSelected;

export const iconButtonUnselected = buttonStyles.buttonUnselected;

export const iconButtonDisabled = style({
  pointerEvents: "none",
});

export const icon = style({
  pointerEvents: "none",
});

export const iconButtonIconDisabled = style({
  opacity: 0.3,
});
