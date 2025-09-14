import { merge } from "lodash";

import { focusOutline } from "../focus-outline";
import { media } from "../styling";
import { vars } from "../theme";

export const linkBase = {
  fontWeight: 500,
  cursor: "pointer",
};

export const linkLayoutInline = {
  display: "inline",
};

export const linkLayoutCompact = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",

  "@media": {
    [media.lgAndUp]: {
      // Only on larger screens; otherwise, a wide link might blow out the page width.
      whiteSpace: "nowrap",
    },
  },
};

export const linkContentsText = {
  display: "inline",
};

export const linkContentsImage = {
  display: "inline-block",
};

export const linkDecoration = {
  textDecorationColor: vars.link.text.decoration.color,
  textDecorationLine: "none",
  ":hover": {
    textDecorationColor: vars.link.hover.text.decoration.color,
    textDecorationLine: "underline",
  },
};

export const linkContent = {
  color: vars.link.text.color,
  ":hover": {
    color: vars.link.hover.text.color,
  },
};

export const link = merge(linkBase, linkDecoration, linkContent, focusOutline);

export const linkIcon = {
  color: "inherit",
  paddingLeft: "0.125rem" /* 2px */,
};
