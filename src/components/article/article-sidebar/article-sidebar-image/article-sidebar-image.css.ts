import { style } from "@vanilla-extract/css";

import * as boxMixins from "../../../box/box.mixins";
import { rounded } from "../../../styling";

export const image = style({
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
  width: "80%",
  height: "auto",
});
