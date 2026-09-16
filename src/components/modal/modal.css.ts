import { style } from "@vanilla-extract/css";

import * as mixins from "./modal.mixins";

export const backdrop = style(mixins.backdrop);

export const modal = style(mixins.modal);

export const modalHeader = style(mixins.modalHeader);

export const modalTitle = style(mixins.modalTitle);

export const modalToolbar = style(mixins.modalToolbar);

export const modalMain = style(mixins.modalMain);
