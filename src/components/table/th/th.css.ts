import { globalStyle, style } from "@vanilla-extract/css";

import { thead } from "../thead/thead.css";
import { tr } from "../tr/tr.css";

import * as thMixins from "./th.mixins";

export const th = style({
  ...thMixins.th,
  selectors: {
    "&:first-child": {
      ...thMixins.thFirst,
    },
  },
});

globalStyle(`${thead} ${th}`, thMixins.thInTHead);

globalStyle(`${tr}:first-child ${th}`, thMixins.thInTrFirst);
