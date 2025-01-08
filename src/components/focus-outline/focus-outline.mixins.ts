import { ComplexStyleRule, globalStyle } from "@vanilla-extract/css";

import { vars } from "./focus-outline-theme-contract.css";

export const outline: ComplexStyleRule = {
  outline: vars.outline,
  outlineOffset: vars.outlineOffset,
};

export const focusWithinOutline: ComplexStyleRule = {
  ":focus-within": outline,
};

export const focusOutline: ComplexStyleRule = {
  ":focus": outline,
};
