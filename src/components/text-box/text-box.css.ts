import { style } from "@vanilla-extract/css";

import * as mixins from "./text-box.mixins";

export const container = style(mixins.container);

export const input = style(mixins.textBox);

export const inputWithIcon = style(mixins.inputWithIcon);

export const iconContainer = style(mixins.iconContainer);
