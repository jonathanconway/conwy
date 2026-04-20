import { style } from "@vanilla-extract/css";

import * as linkMixins from "../../../link/link.mixins";
import * as textSizeMixins from "../../../text/text-size/text-size.mixins";

export const link = style({
  ...linkMixins.link,
  ...textSizeMixins.xs,
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.25rem",
});
