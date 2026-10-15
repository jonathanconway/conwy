import { ComplexStyleRule, style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as linkMixins from "../../link/link.mixins";
import * as textMixins from "../../text/text.mixins";
import { vars } from "../../theme";

export const container = style({});

export const toggleLink = style({
  ...textMixins.small,
  ...linkMixins.link,

  marginTop: rems(0.5),

  color: vars.text.body.color,
} as ComplexStyleRule);
