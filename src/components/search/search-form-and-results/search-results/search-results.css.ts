import { style } from "@vanilla-extract/css";

import * as mixins from "./search-results.mixins";

export const resultsItems = style(mixins.resultsItems);

export const resultsInnerContainer = style(mixins.resultsInnerContainer);
