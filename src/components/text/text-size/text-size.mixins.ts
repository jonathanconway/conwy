import { rems } from "@/framework/css";

import { media } from "../../styling";

import * as textSizeConsts from "./text-size.consts";

export const body = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const blurb = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const collapsibleTitle = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const heading1 = {
  fontSize: rems(textSizeConsts.fontSizeRems.xxxxl),
  lineHeight: rems(textSizeConsts.lineHeightRems.xxxxl),
};

export const heading2 = {
  fontSize: rems(textSizeConsts.fontSizeRems.xxl),
  lineHeight: rems(textSizeConsts.lineHeightRems.xxl),
};

export const heading3 = {
  fontSize: rems(textSizeConsts.fontSizeRems.l),
  lineHeight: rems(textSizeConsts.lineHeightRems.l),
};

export const heading4 = {
  fontSize: rems(textSizeConsts.fontSizeRems.m),
  lineHeight: rems(textSizeConsts.lineHeightRems.m),
};

export const heading5 = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const label = {
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
  lineHeight: rems(textSizeConsts.lineHeightRems.xs),
};

export const listItemSubTitle = {
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
  lineHeight: rems(textSizeConsts.lineHeightRems.xs),
};

export const linkBoxTitleSmall = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const paragraph = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.m),
};

export const preFormatted = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

export const table = {};

export const small = {
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
  lineHeight: rems(textSizeConsts.lineHeightRems.xs),
};

export const subTitle = {
  "@media": {
    [media.mdAndUp]: {
      fontSize: rems(textSizeConsts.fontSizeRems.s),
    },
    [media.sm]: {
      fontSize: rems(textSizeConsts.fontSizeRems.xs),
    },
  },
};

export const summary = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.xs),
};
