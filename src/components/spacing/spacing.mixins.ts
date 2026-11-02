import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
} from "@vanilla-extract/css";

import { Rem } from "@/framework/css";

export function createSpacingNotFirstChildStyle(
  cssProperties: CSSProperties,
): StyleRule {
  return {
    selectors: {
      "&:not(:first-child)": cssProperties,
    },
  };
}

export function createSpacingPaddingTopNotFirstChildStyle(
  paddingTop: Rem,
): ComplexStyleRule {
  return createSpacingNotFirstChildStyle({
    paddingTop,
  });
}
