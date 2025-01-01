import { CSSProperties } from "react";

import * as boxMixins from "../../box/box.mixins";
import * as shadowMixins from "../../shadow/shadow.mixins";
import { vars } from "../../theme";

export const note = {
  backgroundColor: vars.imageModal.background.color,
  ...boxMixins.boxBorderDecorative,
  color: vars.text.body.color,
  zIndex: 10_000,
  pointerEvents: "all",
  maxWidth: "20rem",
  boxShadow: shadowMixins.boxShadowRegular,
} as CSSProperties;
