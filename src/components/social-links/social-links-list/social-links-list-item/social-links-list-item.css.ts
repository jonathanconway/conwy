import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../../link/link.mixins";

export const link = style({
  ...linkMixins.link,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.25rem",
  fontSize: "0.875rem" /* 14px */,
  lineHeight: "1.25rem" /* 20px */,
});
