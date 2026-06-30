import { ComplexStyleRule } from "@vanilla-extract/css";

import { focusOutline } from "../focus-outline";
import { rounded } from "../styling";
import { vars } from "../theme";

export const container: ComplexStyleRule = {
  position: "relative",
  display: "inline-flex",
};

export const textBox: ComplexStyleRule = {
  display: "inline-flex",
  minWidth: "1.25rem" /* 20px */,
  minHeight: "1.25rem" /* 20px */,
  borderStyle: "solid",
  borderColor: vars.textBox.color,
  ...rounded.regular,
  borderWidth: "1px",
  padding: "0.25rem 0.25rem" /* 4px */,
  ...focusOutline,
};

export const inputWithIcon: ComplexStyleRule = {
  paddingLeft: "1.5rem",
  flex: 1,
};

export const iconContainer: ComplexStyleRule = {
  position: "absolute",
  left: "0.3rem",
  top: 0,
  bottom: 0,
  width: "1.5rem",
  display: "flex",
  alignItems: "center",
};
