import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { colors, rounded } from "../styling";
import { vars } from "../theme";

import * as textSizeMixins from "./text-size/text-size.mixins";

export const h1: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
  fontWeight: 600,
  ...textSizeMixins._4xl,
};

export const h2Spacing: ComplexStyleRule & GlobalStyleRule = {
  marginTop: 0,
};

export const h2Inner: ComplexStyleRule & GlobalStyleRule = {
  fontWeight: 600,
  ...textSizeMixins._2xl,
};

export const h2: ComplexStyleRule & GlobalStyleRule = {
  ...h2Spacing,
  ...h2Inner,
};

export const h3Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const h3Inner: ComplexStyleRule & GlobalStyleRule = {};

export const h3: ComplexStyleRule & GlobalStyleRule = {
  ...h3Spacing,
  ...h3Inner,
};

export const h4Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const h4Inner: ComplexStyleRule & GlobalStyleRule = {};

export const h4: ComplexStyleRule & GlobalStyleRule = {
  ...h4Spacing,
  ...h4Inner,
};

export const h5Spacing: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const h5Inner: ComplexStyleRule & GlobalStyleRule = {
  fontWeight: 600,
};

export const h5: ComplexStyleRule & GlobalStyleRule = {
  ...h5Spacing,
  ...h5Inner,
};

export const hr: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1rem",
};

export const paragraph: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "0.5rem",
  ...textSizeMixins.sm,
};

export const paragraphFirst: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: 0,
};

export const ol: ComplexStyleRule & GlobalStyleRule = {
  listStyleType: "decimal",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

export const ul: ComplexStyleRule & GlobalStyleRule = {
  listStyleType: "disc",
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingRight: "1.5rem",
  paddingBottom: 0,
  paddingLeft: "1.5rem",
};

export const li: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.5rem",
};

export const pre: ComplexStyleRule & GlobalStyleRule = {
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

export const image: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "2rem",
  marginBottom: "1rem",
};

export const table: ComplexStyleRule & GlobalStyleRule = {
  marginTop: "1rem",
  marginBottom: "1rem",
};

export const a: ComplexStyleRule & GlobalStyleRule = {
  whiteSpace: "unset",
};

export const body: ComplexStyleRule & GlobalStyleRule = {
  color: vars.text.body.color,
  fontWeight: 400,
  paddingTop: 0,
  ...textSizeMixins.sm,
};

export const label: ComplexStyleRule & GlobalStyleRule = {
  textTransform: "uppercase",
  fontWeight: 500,
  color: vars.label.color,
  ...textSizeMixins.xs,
};

export const small: ComplexStyleRule & GlobalStyleRule = {
  ...body,
  ...textSizeMixins.xs,
};

export const subtitle: ComplexStyleRule & GlobalStyleRule = {
  color: vars.text.body.color,
  ...textSizeMixins.xs,
  fontWeight: "bold",
};

export const summary: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins.sm,
  lineHeight: "1.125rem",
};

export const collapsibleTitle: ComplexStyleRule & GlobalStyleRule = {
  ...textSizeMixins.sm,
  textTransform: "uppercase",
  color: vars.label.color,
  fontWeight: 500,
  paddingTop: 0,
};

export const postDate: ComplexStyleRule & GlobalStyleRule = {
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
};
