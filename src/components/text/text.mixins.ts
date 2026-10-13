import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { colors, media, rounded, text } from "../styling";
import { vars } from "../theme";

import * as textSizeMixins from "./text-size/text-size.mixins";
import * as textWeightMixins from "./text-weight/text-weight.mixins";

// body

export const body: ComplexStyleRule & GlobalStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.sm,
  ...textWeightMixins.body,
};

// collapsibleTitle

export const collapsibleTitle: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins.sm,
  ...textWeightMixins.body,
  textTransform: "uppercase",
  color: vars.label.color,
  paddingTop: 0,
};

// heading1

export const heading1Spacing: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
};

export const heading1Inner: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins._4xl,
  ...textWeightMixins.heading1,
};

export const heading1: ComplexStyleRule & GlobalStyleRule = {
  ...heading1Inner,
};

// heading2

export const heading2Spacing: ComplexStyleRule & GlobalStyleRule = {
  marginTop: 0,
};

export const heading2Inner: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins._2xl,
  ...textWeightMixins.heading2,
};

export const heading2: ComplexStyleRule & GlobalStyleRule = {
  ...heading2Spacing,
  ...heading2Inner,
};

// heading3

export const heading3Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const heading3Inner: ComplexStyleRule & GlobalStyleRule = {};

export const heading3: ComplexStyleRule & GlobalStyleRule = {
  ...heading3Spacing,
  ...heading3Inner,
};

// heading4

export const heading4Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const heading4Inner: ComplexStyleRule & GlobalStyleRule = {};

export const heading4: ComplexStyleRule & GlobalStyleRule = {
  ...heading4Spacing,
  ...heading4Inner,
};

// heading5

export const heading5Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const heading5Inner: ComplexStyleRule & GlobalStyleRule = {
  ...textWeightMixins.heading5,
};

export const heading5: ComplexStyleRule & GlobalStyleRule = {
  ...heading5Spacing,
  ...heading5Inner,
};

// label

export const label: ComplexStyleRule & GlobalStyleRule = {
  textTransform: "uppercase",
  color: vars.label.color,
  cursor: "inherit",
  ...textWeightMixins.body,
  ...textSizeMixins.xs,
};

// listItemSubTitle

export const listItemSubTitle: ComplexStyleRule & GlobalStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.xs,
  ...textWeightMixins.listItemSubTitle,
};

// orderedList

export const orderedList: ComplexStyleRule & GlobalStyleRule = {
  listStyleType: "decimal",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

// paragraph

export const paragraphSpacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "0.5rem",
};

export const paragraph: ComplexStyleRule & GlobalStyleRule = {
  ...body,
  ...paragraphSpacing,
};

// paragraphFirst

export const paragraphFirst: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: 0,
};

// preFormatted

export const preFormatted: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1rem",
  marginBottom: "1rem",
  padding: "1rem",
  backgroundColor: colors.stone_200,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: colors.stone_400,
  ...rounded.md,
  whiteSpace: "pre-wrap",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};

// table

export const table: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1rem",
  marginBottom: "1rem",
};

// small

export const small: ComplexStyleRule & GlobalStyleRule = {
  ...body,
  ...textSizeMixins.xs,
};

// subTitle

export const subTitle: ComplexStyleRule & GlobalStyleRule = {
  color: vars.text.body.color,
  ...textWeightMixins.subTitle,
  "@media": {
    [media.mdAndUp]: {
      ...text.size.sm,
    },
    [media.sm]: {
      ...text.size.xs,
    },
  },
};

// summary

export const summary: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins.sm,
  lineHeight: "1.125rem",
  ...textWeightMixins.body,
};
