import { ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { spacingRems } from "../../spacing/spacing.consts";
import * as spacingMixins from "../../spacing/spacing.mixins";

export const body = {
  ...spacingMixins.spacingTop.xs,
};

export const collapsibleTitle = {};

export const heading1 = {
  ...spacingMixins.spacingTop.m,
};

export const heading2 = {
  ...spacingMixins.spacingTop.m,
};

export const heading3 = {
  ...spacingMixins.spacingTop.m,
};

export const heading4 = {
  ...spacingMixins.spacingTop.s,
};

export const heading5 = {
  ...spacingMixins.spacingTop.s,
};

export const label = {};

export const listItemSubTitle = {};

export const paragraph = {
  ...spacingMixins.spacingTop.s,
};

export const preFormatted = {
  marginTop: rems(spacingRems.m),
  marginBottom: rems(spacingRems.m),
  padding: rems(spacingRems.m),
};

export const table = {
  ...spacingMixins.spacingBlock.m,
};

export const small: ComplexStyleRule = {};

export const subTitle = {};

export const summary = {};
