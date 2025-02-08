import { style } from "@vanilla-extract/css";

import * as mixins from "./link.mixins";

export const link = style(mixins.link);

export const linkLayoutInline = style(mixins.linkLayoutInline);
export const linkLayoutCompact = style(mixins.linkLayoutCompact);

export const linkIcon = style(mixins.linkIcon);
