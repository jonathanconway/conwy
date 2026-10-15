import { ComplexStyleRule } from "@vanilla-extract/css";

import { colors, rounded } from "../styling";
import * as textSpacingMixins from "../text/text-spacing/text-spacing.mixins";
import { vars } from "../theme";

import * as textSizeMixins from "./text-size/text-size.mixins";
import * as textWeightMixins from "./text-weight/text-weight.mixins";

// body

export const bodyInner: ComplexStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.body,
  ...textWeightMixins.body,
};

export const body: ComplexStyleRule = {
  ...bodyInner,
  ...textSpacingMixins.body,
};

// collapsibleTitle

export const collapsibleTitleInner: ComplexStyleRule = {
  textTransform: "uppercase",
  color: vars.label.color,
  ...textSizeMixins.collapsibleTitle,
  ...textWeightMixins.body,
};

export const collapsibleTitle: ComplexStyleRule = {
  ...collapsibleTitleInner,
  ...textSpacingMixins.collapsibleTitle,
};

// heading1

export const heading1Inner: ComplexStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.heading1,
  ...textWeightMixins.heading1,
};

export const heading1: ComplexStyleRule = {
  ...heading1Inner,
  ...textSpacingMixins.heading1,
};

// heading2

export const heading2Inner: ComplexStyleRule = {
  ...textSizeMixins.heading2,
  ...textWeightMixins.heading2,
};

export const heading2: ComplexStyleRule = {
  ...heading2Inner,
  ...textSpacingMixins.heading2,
};

// heading3

export const heading3Inner: ComplexStyleRule = {
  ...textSizeMixins.heading3,
  ...textWeightMixins.heading3,
};

export const heading3: ComplexStyleRule = {
  ...heading3Inner,
  ...textSpacingMixins.heading3,
};

// heading4

export const heading4Inner: ComplexStyleRule = {
  ...textSizeMixins.heading4,
  ...textWeightMixins.heading4,
};

export const heading4: ComplexStyleRule = {
  ...heading4Inner,
  ...textSpacingMixins.heading4,
};

// heading5

export const heading5Inner: ComplexStyleRule = {
  ...textSizeMixins.heading5,
  ...textWeightMixins.heading5,
};

export const heading5: ComplexStyleRule = {
  ...heading5Inner,
  ...textSpacingMixins.heading5,
};

// label

export const labelInner: ComplexStyleRule = {
  textTransform: "uppercase",
  color: vars.label.color,
  cursor: "inherit",
  ...textSizeMixins.label,
  ...textWeightMixins.body,
};

export const label: ComplexStyleRule = {
  ...labelInner,
  ...textSpacingMixins.label,
};

// listItemSubTitle

export const listItemSubTitleInner: ComplexStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.listItemSubTitle,
  ...textWeightMixins.listItemSubTitle,
};

export const listItemSubTitle: ComplexStyleRule = {
  ...listItemSubTitleInner,
  ...textSpacingMixins.listItemSubTitle,
};

// paragraph

export const paragraphInner: ComplexStyleRule = {
  ...bodyInner,
  ...textSizeMixins.paragraph,
  ...textWeightMixins.paragraph,
};

export const paragraph: ComplexStyleRule = {
  ...paragraphInner,
  ...textSpacingMixins.paragraph,
};

// preFormatted

export const preFormattedInner = {
  backgroundColor: colors.stone_200,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: colors.stone_400,
  whiteSpace: "pre-wrap",
  ...textSizeMixins.preFormatted,
  ...textWeightMixins.preFormatted,
  ...rounded.md,
};

export const preFormatted: ComplexStyleRule = {
  ...preFormattedInner,
  ...textSpacingMixins.preFormatted,
};

// table

export const tableInner: ComplexStyleRule = {
  ...textSizeMixins.body,
  ...textWeightMixins.body,
};

export const table: ComplexStyleRule = {
  ...tableInner,
  ...textSpacingMixins.table,
};

// small

export const smallInner: ComplexStyleRule = {
  ...textSizeMixins.small,
  ...textWeightMixins.small,
};

export const small: ComplexStyleRule = {
  ...smallInner,
  ...textSpacingMixins.small,
};

// subTitle

export const subTitleInner: ComplexStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.subTitle,
  ...textWeightMixins.subTitle,
};

export const subTitle: ComplexStyleRule = {
  ...subTitleInner,
  ...textSpacingMixins.subTitle,
};

// summary

export const summaryInner: ComplexStyleRule = {
  ...textSizeMixins.summary,
  ...textWeightMixins.summary,
};

export const summary: ComplexStyleRule = {
  ...summaryInner,
  ...textSpacingMixins.summary,
};
