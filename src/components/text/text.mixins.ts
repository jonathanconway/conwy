import { ComplexStyleRule } from "@vanilla-extract/css";

import { text } from "../styling";
import { vars } from "../theme";

export const body = {
  color: vars.text.body.color,
  fontWeight: 400,
  paddingTop: 0,
  ...text.size.sm,
};

export const label = {
  textTransform: "uppercase",
  fontWeight: 500,
  color: vars.label.color,
  ...text.size.xs,
};

export const paragraph = { ...body, paddingnTop: "1rem" /* 16px */ };

export const small = {
  ...body,
  ...text.size.xs,
};

export const subTitle = {
  color: vars.text.body.color,
  ...text.size.xs,
  fontWeight: "bold",
};

export const summary = {
  ...text.size.sm,
};
