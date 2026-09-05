import { style } from "@vanilla-extract/css";

import * as mixins from "./link.mixins";

export const link = style(mixins.link);

export const linkContainer = style(mixins.linkContainer);

export const linkInnerContainer = style(mixins.linkInnerContainer);
export const linkInnerContainerContents = style(
  mixins.linkInnerContainerContents,
);

export const linkLayoutInline = style(mixins.linkLayoutInline);
export const linkLayoutCompact = style(mixins.linkLayoutCompact);

export const linkIcon = style(mixins.linkIcon);

export const linkIconInline = style(mixins.linkIconInline);
