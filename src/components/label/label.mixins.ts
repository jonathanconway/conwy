import { ComplexStyleRule } from "@vanilla-extract/css";

import { media, text } from "../styling";
import { vars } from "../theme";

export const label: ComplexStyleRule = {
  textTransform: "uppercase",
  fontWeight: 500,
  color: vars.label.color,

  "@media": {
    [media.sm]: {
      ...text.size._2xs,
    },
    [media.mdAndUp]: {
      ...text.size.xs,
    },
  },
};
