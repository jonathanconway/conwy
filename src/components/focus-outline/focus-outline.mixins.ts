import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { vars } from "../theme";

const focusOutlineWidth = 3;

export const focusOutline: ComplexStyleRule & GlobalStyleRule = {
  position: "relative",
  outline: "none",
};

export const focusOutlineAfter: ComplexStyleRule & GlobalStyleRule = {
  position: "absolute",
  content: " ",
  top: `-${focusOutlineWidth - 1}px`,
  right: `-${focusOutlineWidth - 1}px`,
  bottom: `-${focusOutlineWidth - 1}px`,
  left: `-${focusOutlineWidth - 1}px`,
  border: `solid ${focusOutlineWidth}px ${vars.focusOutline.inner.border.color}`,
  borderRadius: `${focusOutlineWidth}px`,
  outline: `solid ${focusOutlineWidth}px ${vars.focusOutline.outer.border.color}`,
  outlineOffset: `${focusOutlineWidth - 2}px`,
  zIndex: 1000,
};
