import { style } from "@vanilla-extract/css";

import * as mixins from "./image-modal.mixins";

export const imageModalButtonsContainer = style(
  mixins.imageModalButtonsContainer,
);

export const imageModal = style(mixins.imageModal);

export const imageModalMain = style(mixins.imageModalMain);

export const imageContainer = style(mixins.imageContainer);

export const imageContainerInner = style(mixins.imageContainerInner);

export const image = style(mixins.image);
