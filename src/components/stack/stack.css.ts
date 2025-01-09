import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./stack.mixins";

export const stackBase = style(mixins.stackBase);

export const stackColumn = style(mixins.stackColumn);

export const stackRow = style(mixins.stackRow);

globalStyle(`${stackBase} > *`, mixins.stackImmediateChildren);
