import { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";

import { colors, rounded } from "../styling";
import { vars } from "../theme";

import * as textSizeMixins from "./text-size/text-size.mixins";

export const h1: ComplexStyleRule = {
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
  fontWeight: 600,
  ...textSizeMixins._4xl,
};

export const h2: ComplexStyleRule = {
  marginTop: 0,
  fontWeight: 600,
  ...textSizeMixins._2xl,
};

export const h3: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const h4: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
};

export const h5: ComplexStyleRule & GlobalStyleRule = {
  paddingTop: "1.25rem",
  fontWeight: 600,
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
  lineHeight: "1.25rem",
};
