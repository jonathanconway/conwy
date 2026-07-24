import { style } from "@vanilla-extract/css";

import * as mixins from "./image-figure.mixins";

export const container = style(mixins.container);

export const link = style(mixins.link);

export const img = style(mixins.img);

export const imgSized = style(mixins.imgSized);

export const figCaption = style(mixins.figCaption);
