import { CSSProperties, ComplexStyleRule } from "@vanilla-extract/css";

import * as iconMixins from "../../icon/icon.mixins";
import * as labelMixins from "../../label/label.mixins";
import { colors, media } from "../../styling";

export const collapsibleContainer: CSSProperties = {
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: colors.stone_300,
};

export const mobileCollapsibleContainer = {
  ...collapsibleContainer,
};

export const checkbox = {
  display: "none",
};

export const expandCollapseButtonBase = {
  "@media": {
    [media.greaterThanSm]: {
      display: "none",
    },
  },
};

export const expandButton = {
  ...expandCollapseButtonBase,
  ...iconMixins.iconContainer,
};

export const collapseButton = {
  ...expandCollapseButtonBase,
  ...iconMixins.iconContainer,
};

export const header: ComplexStyleRule = {
  // display: "none",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "0.5rem" /* 8px */,
  paddingRight: "0.5rem" /* 8px */,
  paddingTop: "0.5rem" /* 4px */,
  paddingBottom: "0.25rem" /* 4px */,
};

export const title: ComplexStyleRule = {
  ...labelMixins.label,
  ...labelMixins.labelSizeRegular,
} as ComplexStyleRule;

export const content = {
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
};

export const checkboxContent = {
  "@media": {
    [media.sm]: {
      display: "none",
    },
  },
};

export const checkboxNotCheckedHeaderExpandButton = {
  display: "none",
};

export const checkboxCheckedHeaderExpandButton = {
  display: "none",
};

export const checkboxCheckedContent = {
  display: "flex",
};

export const checkboxHeader = {
  // display: "none",
  "@media": {
    [media.sm]: {
      display: "flex",
    },
  },
};
