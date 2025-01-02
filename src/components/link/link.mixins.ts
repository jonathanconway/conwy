import { merge } from "lodash";

import { vars } from "../theme";

export const linkBase = {
  display: "inline",
  alignItems: "center",
  fontWeight: 500,
  cursor: "pointer",
  whiteSpace: "nowrap",
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
