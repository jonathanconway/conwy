import { createTheme } from "@vanilla-extract/css";

import { vars } from "./focus-outline-theme-contract.css";

export const themeFocusOutlineClass = createTheme(vars, {
  outline: "solid 3px yellow",
  border: "solid 2px black",
  outlineOffset: "1px",
});
