import { CSSProperties, ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { SpacingSizes } from "./spacing-sizes";
import { spacingRems } from "./spacing.consts";

function createSpacingTopStyle(
  paddingTop: CSSProperties["paddingTop"],
): ComplexStyleRule {
  return {
    selectors: {
      "&:not(:first-child)": {
        paddingTop,
      },
    },
  };
}

export const spacingTop = {
  [SpacingSizes.XXS]: createSpacingTopStyle(rems(spacingRems.xxs)),
  [SpacingSizes.XS]: createSpacingTopStyle(rems(spacingRems.xs)),
  [SpacingSizes.S]: createSpacingTopStyle(rems(spacingRems.s)),
  [SpacingSizes.M]: createSpacingTopStyle(rems(spacingRems.m)),
  [SpacingSizes.L]: createSpacingTopStyle(rems(spacingRems.l)),
  [SpacingSizes.XL]: createSpacingTopStyle(rems(spacingRems.xl)),
  [SpacingSizes.XXL]: createSpacingTopStyle(rems(spacingRems.xxl)),
};

function createSpacingBlockStyle(
  paddingBlock: CSSProperties["paddingBlock"],
): ComplexStyleRule {
  return {
    selectors: {
      "&:not(:first-child)": {
        paddingBlock,
      },
      "&:first-child": {
        paddingBottom: paddingBlock,
      },
    },
  };
}

export const spacingBlock = {
  [SpacingSizes.XXS]: createSpacingBlockStyle(rems(spacingRems.xxs)),
  [SpacingSizes.XS]: createSpacingBlockStyle(rems(spacingRems.xs)),
  [SpacingSizes.S]: createSpacingBlockStyle(rems(spacingRems.s)),
  [SpacingSizes.M]: createSpacingBlockStyle(rems(spacingRems.m)),
  [SpacingSizes.L]: createSpacingBlockStyle(rems(spacingRems.l)),
  [SpacingSizes.XL]: createSpacingBlockStyle(rems(spacingRems.xl)),
  [SpacingSizes.XXL]: createSpacingBlockStyle(rems(spacingRems.xxl)),
};
