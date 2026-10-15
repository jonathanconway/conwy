import { ComplexStyleRule, style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import * as textMixins from "../../text/text.mixins";
import { vars } from "../../theme";

export const textExpandableOuterContainer = style({
  position: "relative",
  overflow: "hidden",
});

export const toggleLink = style({
  ...linkMixins.link,
  ...textMixins.small,

  color: vars.text.body.color,
} as ComplexStyleRule);
