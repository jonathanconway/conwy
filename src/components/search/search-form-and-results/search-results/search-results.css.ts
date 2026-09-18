import { style } from "@vanilla-extract/css";

import * as mixins from "./search-results.mixins";

export const resultsContainer = style(mixins.resultsContainer);

export const resultsInnerContainer = style(mixins.resultsInnerContainer);

export const resultsContainerWithLabel = style(
  mixins.resultsContainerWithLabel,
);

export const resultsContainerLabel = style(mixins.resultsContainerLabel);
