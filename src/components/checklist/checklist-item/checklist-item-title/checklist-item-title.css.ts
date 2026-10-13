import { style } from "@vanilla-extract/css";

import * as textWeightMixins from "../../../text/text-weight/text-weight.mixins";

export const checklistItemTitle = style({
  ...textWeightMixins.body,
  paddingRight: "2rem",
});
