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
  position: "relative",
  borderRadius: "3px",
  borderColor: "black",
});

globalStyle(`${themeFocusOutlineEnabledClass} *:focus:after`, {
  position: "absolute",
  content: " ",
  top: "-2px",
  right: "-2px",
  bottom: "-2px",
  left: "-2px",
  border: "solid 3px black",
  borderRadius: "3px",
});
