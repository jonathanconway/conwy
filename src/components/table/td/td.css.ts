import { globalStyle, style } from "@vanilla-extract/css";

import { tr } from "../tr/tr.css";

import * as tdMixins from "./td.mixins";

export const td = style({
  ...tdMixins.td,
  selectors: {
    "&:first-child": {
      ...tdMixins.tdFirst,
    },
  },
});

globalStyle(`${tr}:first-child ${td}`, tdMixins.tdInTrFirst);
