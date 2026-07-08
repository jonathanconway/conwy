import { style } from "@vanilla-extract/css";

import {
  boxBorderDecorative,
  boxBorderStructural,
  boxSizeMedium,
  boxSizeSmall,
} from "./box.mixins";

export const typeDecorative = style(boxBorderDecorative);

export const typeStructural = style(boxBorderStructural);

export const sizeMedium = style(boxSizeMedium);

export const sizeSmall = style(boxSizeSmall);
