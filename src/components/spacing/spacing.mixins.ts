import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
} from "@vanilla-extract/css";

import { Rem } from "@/framework/css";

export function createNotFirstChildStyle(
  cssProperties: CSSProperties,
): StyleRule {
  return {
    selectors: {
      "&:not(:first-child)": cssProperties,
    },
  };
}

export function createSpacingTopNotFirstChildStyle(
  paddingTop: Rem,
): ComplexStyleRule {
  return createNotFirstChildStyle({
    paddingTop,
  });
}
