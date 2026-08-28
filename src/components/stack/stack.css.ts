import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./stack.mixins";

export const stackBase = style(mixins.stackBase);

export const stackColumn = style(mixins.stackColumn);

export const stackRow = style(mixins.stackRow);

export const stackColumnReverse = style(mixins.stackColumnReverse);

export const stackRowReverse = style(mixins.stackRowReverse);

export const stackDistributionEven = style({});

globalStyle(
  `${stackDistributionEven} > *`,
  mixins.stackChildrenDistributionEven,
);

export const stackDistributionFlow = style(
  mixins.stackChildrenDistributionFlow,
);

globalStyle(
  `${stackDistributionFlow} > *`,
  mixins.stackChildrenDistributionFlow,
);
