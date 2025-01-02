import { ComplexStyleRule, style } from "@vanilla-extract/css";

import * as textMixins from "./text.mixins";

export const body = style(textMixins.body);

export const label = style(textMixins.label as ComplexStyleRule);

export const paragraph = style(textMixins.paragraph);

export const small = style(textMixins.small);

export const summary = style(textMixins.summary);

export const subTitle = style(textMixins.subTitle);
