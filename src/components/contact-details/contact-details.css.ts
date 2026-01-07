import { style } from "@vanilla-extract/css";

import * as iconMixins from "../icon/icon.mixins";
import * as linkMixins from "../link/link.mixins";
import { text } from "../styling";

export const container = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  alignItems: "flex-start",
  gap: "1rem",
  ...text.size.sm,
});

export const item = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const link = style({
  ...linkMixins.link,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.25rem",
});

export const linkIcon = style({
  ...iconMixins.iconContainer,
  ...linkMixins.linkIcon,
});
