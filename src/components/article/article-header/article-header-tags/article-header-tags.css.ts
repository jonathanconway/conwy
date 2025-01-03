import { style } from "@vanilla-extract/css";

import * as boxMixins from "../../../box/box.mixins";
import { rounded } from "../../../styling";

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

  ...boxMixins.boxBorderDecorative,

  ...rounded.regular,
});
