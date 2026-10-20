import { style } from "@vanilla-extract/css";

import * as tdMixins from "./td.mixins";

export const td = style({
  ...tdMixins.td,
  selectors: {
    "&:first-child": {
      ...tdMixins.tdFirst,
    },
  },
});
