import { style } from "@vanilla-extract/css";

import * as mixins from "./link-box.mixins";

export const linkBox = style(mixins.linkBox);

export const linkBoxSmall = style(mixins.linkBoxSmall);

export const linkBoxMaxWidth = style(mixins.linkBoxMaxWidth);
