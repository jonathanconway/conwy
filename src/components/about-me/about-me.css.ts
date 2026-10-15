import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./about-me.mixins";

export const outerContainer = style(mixins.outerContainer);

export const container = style(mixins.container);

globalStyle(`${container} h1`, mixins.h1);

export const face = style(mixins.face);
