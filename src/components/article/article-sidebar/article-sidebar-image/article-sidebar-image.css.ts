import { style } from "@vanilla-extract/css";

import { rounded } from "../../../styling";

export const image = style({
  ...rounded.md,
  width: "80%",
  height: "auto",
});
