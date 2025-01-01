import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../link/link.mixins";
import { vars } from "../../theme";

export const container = style({
  display: "flex",
  alignItems: "start",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "0.5rem",
});

export const link = style({
  ...linkMixins.link,
  width: "1rem",
  height: "1rem",
  color: vars.text.body.color,
});
