import { ComplexStyleRule } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { media } from "../styling";
import * as textSizeConsts from "../text/text-size/text-size.consts";
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
      fontSize: rems(textSizeConsts.fontSizeRems.xxs),
    },
    [media.mdAndUp]: {
      fontSize: rems(textSizeConsts.fontSizeRems.xs),
    },
  },
};

export const labelSizeRegular: ComplexStyleRule = {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
};
