import { style } from "@vanilla-extract/css";

import * as boxMixins from "../../box/box.mixins";
import { rounded, text } from "../../styling";

// todo: because of prismjs; find a way to remove the !important 's

export const code = style({
  display: "inline",
  paddingLeft: "0.25rem !important",
  paddingRight: "0.25rem !important",
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
  ...text.size.sm,
} as any);
