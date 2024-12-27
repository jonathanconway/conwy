import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const buttonBase = style({
  display: "inline-flex",
  minWidth: "1.25rem" /* 20px */,
  minHeight: "1.25rem" /* 20px */,
  alignItems: "center",
  alignContent: "center",
  borderStyle: "solid",
  borderRadius: "0.25rem" /* 4px */,
  borderWidth: "1px",
  padding: "0.125rem 0.25rem" /* 4px */,
  cursor: "pointer",
});

export const buttonUnselected = style({
  borderColor: vars.button.border.color,
  backgroundImage: `linear-gradient(to bottom, ${vars.button.background.gradientFrom.color}, ${vars.button.background.gradientTo.color})`,
  ":hover": {
    backgroundImage: `linear-gradient(to bottom, ${vars.button.hover.background.gradientFrom.color}, ${vars.button.hover.background.gradientTo.color})`,
  },
});

export const buttonSelected = style({
  borderColor: vars.button.selected.border.color,
  border: vars.button.selected.border.color,
  backgroundImage: `linear-gradient(to bottom, ${vars.button.selected.background.gradientFrom.color}, ${vars.button.selected.background.gradientTo.color})`,
});
