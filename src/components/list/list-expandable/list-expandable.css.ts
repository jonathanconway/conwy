import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import * as textMixins from "../../text/text.mixins";
import { vars } from "../../theme";

export const container = style({});

export const toggleLink = style({
  ...textMixins.small,
  ...linkMixins.link,

  marginTop: "0.5rem",

  color: vars.text.body.color,
});
