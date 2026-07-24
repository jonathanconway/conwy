import { style } from "@vanilla-extract/css";

import * as imageFigureMixins from "../../image-figure/image-figure.mixins";

export const imageFigure = style({
  ...imageFigureMixins.container,
  width: "100%",
});
