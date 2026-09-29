import { style } from "@vanilla-extract/css";

import { rounded, text } from "../styling";
import { vars } from "../theme";

export const optionContainer = style({
  display: "inline-flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  ...rounded.full,
  position: "relative",
  selectors: {
    ["&:has(:checked)"]: {
      backgroundColor: vars.switch.checked.background.color,
      color: vars.switch.checked.color,
    },
    ["&:focus"]: {
      ...rounded.full,
    },
  },
});

export const optionInput = style({
  position: "absolute",
  opacity: 0,
  height: "1px",
  width: "1px",
});

export const optionLabel = style({
  display: "inline-flex",
  paddingLeft: "0.5rem" /* 8px */,
  paddingRight: "0.5rem" /* 8px */,
  paddingTop: "0.25rem" /* 4px */,
  paddingBottom: "0.25rem" /* 4px */,
  cursor: "pointer",

  ...text.size.xs,
});
