import { merge } from "lodash";

import { media } from "../styling";
import { vars } from "../theme";

export const linkBase = {
  display: "inline",
  alignItems: "center",
  fontWeight: 500,
  cursor: "pointer",

  "@media": {
    [media.lgAndUp]: {
      // Only on larger screens; otherwise, a wide link might blow out the page width.
      whiteSpace: "nowrap",
    },
  },
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

export const link = merge(linkBase, linkDecoration, linkContent);

export const linkIcon = {
  color: "inherit",
  paddingLeft: "0.125rem" /* 2px */,
};
