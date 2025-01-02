import { style } from "@vanilla-extract/css";

import { boxBorderDecorative } from "../../box/box.mixins";
import { rounded } from "../../styling";

export const image = style({
  ...boxBorderDecorative,
  ...rounded.md,
  width: "4rem",
  height: "auto",
});
