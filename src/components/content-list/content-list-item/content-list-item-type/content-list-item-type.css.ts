import { style } from "@vanilla-extract/css";

import * as textSizeMixins from "../../../text/text-size/text-size.mixins";
import * as textWeightMixins from "../../../text/text-weight/text-weight.mixins";
import { vars } from "../../../theme";

export const type = style({
  display: "inline-block",
  color: vars.contentListItem.type.color,
  textTransform: "uppercase",
  textAlign: "right",
  ...textWeightMixins.body,
  ...textSizeMixins.xs,
});
