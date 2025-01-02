import { style } from "@vanilla-extract/css";

import * as boxMixins from "../../../../box/box.mixins";
import { rounded } from "../../../../styling";

export const aside = style({
  padding: "1rem",
  margin: "1rem",
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
  // ...aside
});

//   p_4,
//   m_4,
//   my_4,
//   rounded,
//   rounded_md,
//   border,
//   border_stone_400,

//   bg_stone_200,
//   dark(bg_stone_800),

//   all(first(pt_0)),
//   all(first(mt_0)),
// );
