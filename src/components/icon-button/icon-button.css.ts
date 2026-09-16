import { style } from "@vanilla-extract/css";

import * as buttonStyles from "../button/button.css";
import * as buttonMixins from "../button/button.mixins";
import * as iconMixins from "../icon/icon.mixins";
import { rounded } from "../styling";

export const iconButtonBase = style({
  ...buttonMixins.buttonBase,
  display: "inline-flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  ...rounded.regular,
  width: "1.5rem",
  height: "1.5rem",
  padding: "0.25rem",
});

export const iconButtonAppearanceRegular = style({
  borderWidth: "1px",
});

const filterBrightness2_5 = {
  filter: "brightness(2.5)",
};

export const iconButtonAppearanceNone = style({
  borderWidth: "0",
  background: "none",
  padding: 0,
  selectors: {
    "&:hover": filterBrightness2_5,
    "&:focus": filterBrightness2_5,
    "&:active": filterBrightness2_5,
  },
});

export const iconButtonSelected = buttonStyles.buttonSelected;

export const iconButtonUnselected = buttonStyles.buttonUnselected;

export const iconButtonDisabled = style({
  pointerEvents: "none",
});

export const icon = style({
  ...iconMixins.iconContainer,
});

export const iconButtonIconDisabled = style({
  opacity: 0.3,
});
