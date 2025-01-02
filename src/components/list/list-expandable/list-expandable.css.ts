import { style } from "@vanilla-extract/css";
import { merge } from "lodash";

import * as linkMixins from "../../link/link.mixins";
import { text } from "../../styling";
import { vars } from "../../theme";

export const container = style({});

export const toggleLink = style(
  merge(linkMixins.link, text.size.xs, {
    color: vars.text.body.color,
  }),
);
