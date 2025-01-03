import { rounded } from "../styling";
import { vars } from "../theme";

export const buttonBase = {
  display: "inline-flex",
  minWidth: "1.25rem" /* 20px */,
  minHeight: "1.25rem" /* 20px */,
  alignItems: "center",
  alignContent: "center",
  borderStyle: "solid",
  ...rounded.regular,
  borderWidth: "1px",
  padding: "0.125rem 0.25rem" /* 4px */,
  cursor: "pointer",
  color: vars.button.color,
};

export const buttonUnselected = {
  borderColor: vars.button.border.color,
  backgroundImage: `linear-gradient(to bottom, ${vars.button.background.gradientFrom.color}, ${vars.button.background.gradientTo.color})`,
  ":hover": {
    backgroundImage: `linear-gradient(to bottom, ${vars.button.hover.background.gradientFrom.color}, ${vars.button.hover.background.gradientTo.color})`,
  },
};

export const buttonSelected = {
  borderColor: vars.button.selected.border.color,
  border: vars.button.selected.border.color,
  backgroundImage: `linear-gradient(to bottom, ${vars.button.selected.background.gradientFrom.color}, ${vars.button.selected.background.gradientTo.color})`,
};
