import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const listItem: ComplexStyleRule = {
  ...textMixins.paragraph,
};

export const listItemSmall: ComplexStyleRule = {
  ...textMixins.small,
};
