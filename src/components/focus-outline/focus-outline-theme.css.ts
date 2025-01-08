import { createTheme, globalStyle } from "@vanilla-extract/css";

import { vars } from "./focus-outline-theme-contract.css";

export const themeFocusOutlineEnabledClass = createTheme(vars, {
  outline: "solid 3px yellow",
  outlineOffset: "1px",
});

export const themeFocusOutlineDisabledClass = createTheme(vars, {
  outline: "inherit",
  outlineOffset: "inherit",
});

globalStyle(`${themeFocusOutlineEnabledClass} *:focus`, {
  border: "solid 3px black",
});
