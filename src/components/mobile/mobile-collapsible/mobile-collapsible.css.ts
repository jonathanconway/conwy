import { globalStyle, style } from "@vanilla-extract/css";

import * as mixins from "./mobile-collapsible.mixins";

export const collapsibleContainer = style(mixins.collapsibleContainer);

export const mobileCollapsibleContainer = style(
  mixins.mobileCollapsibleContainer,
);

export const checkbox = style(mixins.checkbox);

export const expandButton = style(mixins.expandButton);

export const collapseButton = style(mixins.collapseButton);

export const header = style(mixins.header);

export const title = style(mixins.title);

export const content = style(mixins.content);

globalStyle(`${checkbox} ~ ${content}`, mixins.checkboxContent);

globalStyle(
  `${checkbox}:not(:checked) ~ ${header} ${expandButton}`,
  mixins.checkboxNotCheckedHeaderExpandButton,
);

globalStyle(
  `${checkbox}:checked ~ ${header} ${collapseButton}`,
  mixins.checkboxCheckedHeaderExpandButton,
);

globalStyle(`${checkbox}:checked ~ ${content}`, mixins.checkboxCheckedContent);

globalStyle(`${checkbox} ~ ${header}`, mixins.checkboxHeader);
