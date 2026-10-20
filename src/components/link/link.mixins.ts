import { ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as buttonMixins from "../button/button.mixins";
import { focusOutline } from "../focus-outline";
import * as iconMixins from "../icon/icon.mixins";
import { media } from "../styling";
import * as textSizeConsts from "../text/text-size/text-size.consts";
import * as textSizeMixins from "../text/text-size/text-size.mixins";
import * as textWeightMixins from "../text/text-weight/text-weight.mixins";
import { vars } from "../theme";

/**
 * Base
 */

export const linkBase = {
  cursor: "pointer",
  display: "inline-flex",
  ...textWeightMixins.body,
};

/**
 * Contents
 */

export const linkContentsText = {
  display: "inline-flex",
};

export const linkContentsImage = {
  display: "inline-block",
};

/**
 * Decoration
 */

export const linkDecoration = {
  textDecorationColor: vars.link.text.decoration.color,
  textDecorationLine: "none",
};

export const linkDecorationHover = {
  textDecorationColor: vars.link.hover.text.decoration.color,
  textDecorationLine: "underline",
};

/**
 * Content
 */

export const linkColor = {
  color: vars.link.text.color,
};

export const linkColorHover = {
  color: vars.link.hover.text.color,
};

/**
 * Hover
 */

const linkHover = {
  ...linkColorHover,
  ...linkDecorationHover,
};

/**
 * Link
 */

export const link: ComplexStyleRule = {
  ...linkBase,
  ...linkDecoration,
  ...linkColor,
  ...focusOutline,

  ":hover": {
    ...linkHover,
  },
};

/**
 * Size
 */

export const linkSizeXXS = {
  fontSize: rems(textSizeConsts.fontSizeRems.xxs),
  lineHeight: rems(textSizeConsts.lineHeightRems.xxs),
};

export const linkSizeXS = {
  fontSize: rems(textSizeConsts.fontSizeRems.xs),
  lineHeight: rems(textSizeConsts.lineHeightRems.xs),
};

export const linkSizeS = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
  lineHeight: rems(textSizeConsts.lineHeightRems.s),
};

/**
 * Container
 */

export const linkContainer = {
  display: "inline-flex",
  alignItems: "center",
  flex: 1,
  gap: "0.25rem",
  width: "100%",
};

export const linkInnerContainer = {
  display: "inline-block",
  flex: 1,
};

export const linkInnerContainerAll = {
  color: "initial",
  textDecoration: "none",
};

export const linkInnerContainerContents = {
  display: "contents",
};

/**
 * Layout
 */

export const linkLayoutInline = {};

export const linkLayoutCompact = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",

  "@media": {
    [media.lgAndUp]: {
      // Only on larger screens; otherwise, a wide link might blow out the page width.
      whiteSpace: "nowrap",
    },
  },
};

/**
 * Appearance
 */

export const linkAppearanceText = {};

export const linkAppearanceButton = {
  ...buttonMixins.buttonBase,
};

/**
 * Icon
 */

export const linkIcon: ComplexStyleRule = {
  ...iconMixins.iconContainer,
  color: "inherit",
};

export const linkIconInline = {
  ...iconMixins.iconContainer,
  color: "inherit",
  paddingLeft: "0.25rem",
};
