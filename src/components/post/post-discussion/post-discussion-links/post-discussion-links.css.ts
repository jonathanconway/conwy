import { style } from "@vanilla-extract/css";

import { text } from "../../../styling";

export const discussion = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  marginTop: "0.5rem",
});

export const count = style({
  ...text.size.xs,
});
