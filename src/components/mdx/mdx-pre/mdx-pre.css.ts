import { globalStyle, style } from "@vanilla-extract/css";

import { focusOutline } from "../../focus-outline";

export const pre = style({
  marginTop: 0,
  marginBottom: 0,
  overflow: "visible",
  ...focusOutline,
});

globalStyle(`${pre} code`, {
  border: "none",
});
