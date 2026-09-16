import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./search-results-item.mixins";

export const excerpt = style(mixins.excerpt);

globalStyle(`${excerpt} img`, mixins.excerptImage);
