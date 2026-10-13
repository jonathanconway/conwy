import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const listItem: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.body,
};

export const listItemSmall: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.small,
};
