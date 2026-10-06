import { style } from "@vanilla-extract/css";

import * as mixins from "./breadcrumb.mixins";

export const container = style(mixins.container);

export const titleSegment = style(mixins.titleSegment);
