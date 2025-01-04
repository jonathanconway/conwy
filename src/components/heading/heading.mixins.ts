import { ComplexStyleRule } from "@vanilla-extract/css";

import { text } from "../styling";

export const h1: ComplexStyleRule = {
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
  fontWeight: 600,
  ...text.size._4xl,
};

export const h2: ComplexStyleRule = {
  marginTop: 0,
  fontWeight: 600,
  ...text.size._2xl,
};

export const h3: ComplexStyleRule = {
  fontWeight: 600,
  ...text.size.xl,
};

export const h4: ComplexStyleRule = {
  fontWeight: 600,
  ...text.size.lg,
};
