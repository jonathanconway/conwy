import { globalStyle, style } from "@vanilla-extract/css";

import * as focusOutlineStyles from "./focus-outline.css";
import * as mixins from "./focus-outline.mixins";

export const themeFocusOutlineEnabledClass = style({});

globalStyle(
  `${themeFocusOutlineEnabledClass} *:focus:not(${focusOutlineStyles.focusOutlineDisabled})`,
  mixins.focusOutline,
);

globalStyle(
  `${themeFocusOutlineEnabledClass} *:focus:not(${focusOutlineStyles.focusOutlineDisabled}):after`,
  mixins.focusOutlineAfter,
);

globalStyle(
  `${themeFocusOutlineEnabledClass} ${focusOutlineStyles.focusWithinOutline}:focus-within`,
  mixins.focusOutline,
);

globalStyle(
  `${themeFocusOutlineEnabledClass} ${focusOutlineStyles.focusWithinOutline}:focus-within:after`,
  mixins.focusOutlineAfter,
);
