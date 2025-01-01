import { style } from "@vanilla-extract/css";

import { text } from "../styling";

export const container = style({
  display: "flex",
  ...text.size.sm,
});
