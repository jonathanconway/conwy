import { style } from "@vanilla-extract/css";

import * as mixins from "./layout-cascade.mixins";

export const container = style(mixins.container);

export const cascadeContainer = style(mixins.cascadeContainer);

export const childContainerSingle = style(mixins.childContainerSingle);

export const childContainer = style(mixins.childContainer);

export const childInner = style(mixins.childInner);

export const child = style(mixins.child);

export const selectedChildContainer = style(mixins.selectedChildContainer);

export const selectedChild = style(mixins.selectedChild);

export const nav = style(mixins.nav);
