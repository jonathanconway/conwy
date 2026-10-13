import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";

export const listItemSpacing: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "0.5rem",
};

export const listItem: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.body,
  ...listItemSpacing,
};

export const listItemWithoutSpacing: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.body,
};

export const listItemSmallSpacing: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "0.25rem",
};

export const listItemSmall: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.small,
  ...listItemSmallSpacing,
};

export const listItemSmallWithoutSpacing: ComplexStyleRule & GlobalStyleRule = {
  ...textMixins.small,
};
