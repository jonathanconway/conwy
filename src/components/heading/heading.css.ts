import { style } from "@vanilla-extract/css";

import { text } from "../styling";

export const h1 = style({
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
  fontWeight: 600,
  ...text.size._4xl,
});

export const h2 = style({
  marginTop: 0,
  fontWeight: 600,
  ...text.size._2xl,
});

export const h3 = style({
  marginTop: "1.25rem",
  fontWeight: 600,
  ...text.size.lg,
});

export const h4 = style({
  marginTop: "1.25rem",
  fontWeight: 600,
});
