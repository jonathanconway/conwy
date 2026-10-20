import { ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { spacingRems } from "../spacing/spacing.consts";
import * as spacingMixins from "../spacing/spacing.mixins";

export const list: ComplexStyleRule = {
  marginLeft: 0,
  marginRight: 0,
  paddingInline: rems(1.5),
  paddingBottom: 0,

  ...spacingMixins.createSpacingTopNotFirstChildStyle(rems(spacingRems.s)!),
};

export const unorderedList: ComplexStyleRule = {
  ...list,
};

export const unorderedListBullets: ComplexStyleRule = {
  listStyleType: "disc",
};

export const unorderedListNoBullets: ComplexStyleRule = {
  paddingInline: 0,
  listStyle: "none",
};

export const orderedList: ComplexStyleRule = {
  ...list,
};
