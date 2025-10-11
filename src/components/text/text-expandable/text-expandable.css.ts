import { style } from "@vanilla-extract/css";
import { merge } from "lodash";

import * as linkMixins from "../../link/link.mixins";
import { text } from "../../styling";
import { vars } from "../../theme";

export const textExpandableOuterContainer = style({
  position: "relative",
  overflow: "hidden",
});

export const toggleLink = style(
  merge(linkMixins.link, text.size.xs, {
    color: vars.text.body.color,
  }),
);

export const ellipsis = style({
  position: "absolute",
  display: "inline",
  bottom: 0,
  right: 0,
  paddingRight: "0.125rem",
  paddingBottom: "0.125rem",
});
