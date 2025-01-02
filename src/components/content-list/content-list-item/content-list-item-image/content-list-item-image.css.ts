import { style } from "@vanilla-extract/css";

import { rounded } from "../../../styling";

export const image = style({
  ...rounded.md,
  width: "100%",
  height: "auto",
});
