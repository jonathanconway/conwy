import { style } from "@vanilla-extract/css";

import * as mixins from "./focus-outline.mixins";

export const focusOutline = style(mixins.focusOutline);

export const focusOutlineDisabled = style({});

export const focusOutlineAfter = style(mixins.focusOutlineAfter);

export const focusWithinOutline = style({});
