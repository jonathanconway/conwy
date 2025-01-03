import { style } from "@vanilla-extract/css";

import * as mixins from "./button.mixins";

export const buttonBase = style(mixins.buttonBase);

export const buttonUnselected = style(mixins.buttonUnselected);

export const buttonSelected = style(mixins.buttonSelected);
