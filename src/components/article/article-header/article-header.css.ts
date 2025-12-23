import { style } from "@vanilla-extract/css";

import { colors, rounded } from "../../styling";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const title = style({
  fontSize: "1.5rem" /* 24px */,
  lineHeight: "2rem" /* 32px */,
  fontWeight: 600,
});

export const line1 = style({
  display: "flex",
  gap: "0.5rem",
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});

export const tags = style({
  fontSize: "0.75rem" /* 12px */,
  lineHeight: "1rem" /* 16px */,
});

export const tag = style({
  marginRight: "0.75rem" /* 12px */,
  paddingTop: "0.125rem" /* 2px */,
  paddingBottom: "0.125rem" /* 2px */,
  paddingLeft: "0.25rem" /* 4px */,
  paddingRight: "0.25rem" /* 4px */,
  borderWidth: "1px",
  borderColor: colors.stone_400,
  borderStyle: "solid",
  ...rounded.regular,
});
