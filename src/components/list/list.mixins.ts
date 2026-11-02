import { ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { spacingRems } from "../spacing/spacing.consts";

export const list: ComplexStyleRule = {
  marginLeft: 0,
  marginRight: 0,
  paddingInline: rems(1.5),
  paddingBottom: 0,
};

export const listSpacing = {
  paddingTop: rems(spacingRems.s),
};

export const listItemSpacing = {
  paddingTop: rems(spacingRems.xs),
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
