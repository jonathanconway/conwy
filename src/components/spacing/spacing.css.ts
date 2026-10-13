import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./spacing.mixins";

export const spacingContainer = style({});

globalStyle(
  `${spacingContainer} > *:not(:first-child)`,
  mixins.spacingContainerChild,
);
