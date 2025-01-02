import { style } from "@vanilla-extract/css";
import { merge } from "lodash";

import * as linkMixins from "../../../link/link.mixins";
import { rounded, text } from "../../../styling";
import * as textMixins from "../../../text/text.mixins";
import { vars } from "../../../theme";

// todo: extract to separate component
export const date = style(
  merge(linkMixins.link, text.size.xs, textMixins.body),
);

export const mainLink = style(merge(linkMixins.link, text.size.xs));

// todo: extract to separate component
export const decorationContainer = style({
  ...rounded.md,
  height: "3.5rem",
  color: vars.microsListItem.decorationContainer.color,
});

export const decoration = style({
  width: "100%",
  height: "100%",
});
