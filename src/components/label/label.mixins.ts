import { ComplexStyleRule } from "@vanilla-extract/css";

import { media, text } from "../styling";
import * as textWeightMixins from "../text/text-weight/text-weight.mixins";
import { vars } from "../theme";

export const label: ComplexStyleRule = {
  textTransform: "uppercase",
  color: vars.label.color,
  ...textWeightMixins.label,
};

export const labelSizeSmall: ComplexStyleRule = {
  "@media": {
    [media.sm]: {
      ...text.size._2xs,
    },
    [media.mdAndUp]: {
      ...text.size.xs,
    },
  },
};

export const labelSizeRegular: ComplexStyleRule = {
  ...text.size.sm,
};
