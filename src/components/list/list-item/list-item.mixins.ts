import { ComplexStyleRule } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const listItem = {
  ...textMixins.paragraph,
};

export const listItemSmall: ComplexStyleRule = {
  ...textMixins.small,
};
