import { style } from "@vanilla-extract/css";

import { vars } from "../theme";

export const container = style({
  borderRadius: "0.375rem",
  borderWidth: "1px",
  borderColor: vars.box.border.color,
  padding: "0.75rem" /* 12px */,
});
