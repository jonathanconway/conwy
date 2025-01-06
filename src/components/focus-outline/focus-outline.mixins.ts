import { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "./focus-outline-theme-contract.css";

// const vars = {
//   outline: "",
//   border: "",
//   outlineOffset: "",
// };

export const outline = {
  outline: vars.outline,
  border: vars.border,
  outlineOffset: vars.outlineOffset,
};

export const focusWithinOutline: ComplexStyleRule = {
  ":focus-within": outline,
};

export const focusOutline: ComplexStyleRule = {
  ":focus": outline,
};
