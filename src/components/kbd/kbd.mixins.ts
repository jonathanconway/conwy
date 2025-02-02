import { ComplexStyleRule } from "@vanilla-extract/css";

import * as borderMixins from "../box/box.mixins";
import * as boxShadowMixins from "../shadow/shadow.mixins";
import * as textSizesMixins from "../text/text-size/text-size.mixins";
import { vars } from "../theme";

export const kbd: ComplexStyleRule = {
  background: vars.kbd.background,
  ...borderMixins.boxBorderDecorative,
  boxShadow: boxShadowMixins.boxShadowRegular,
  display: "inline-flex",
  justifyContent: "center",
  minWidth: "1.25rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  fontVariantLigatures: "none",
  ...textSizesMixins.sm,
};
