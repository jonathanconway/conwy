import { ComplexStyleRule } from "@vanilla-extract/css";

import * as boxMixins from "../box/box.mixins";
import * as linkMixins from "../link/link.mixins";
import * as textSizeMixins from "../text/text-size/text-size.mixins";
import { vars } from "../theme";

export const container: ComplexStyleRule = {
  padding: "0.5rem",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.5rem",
  margin: "1rem 0",
  ...boxMixins.boxBorderDecorative,
};

export const link = {
  ...linkMixins.link,
  display: "inline-flex",
};

const imgBase = {
  filter: vars.imageFigure.filter,
};

export const img = {
  ...imgBase,
  maxWidth: "100%",
  maxHeight: "100%",
};

export const imgSized = {
  ...imgBase,
  maxWidth: "100%",
  maxHeight: "20rem",
  width: "auto",
  height: "auto",
};

export const figCaption = {
  ...textSizeMixins.xs,
  marginTop: "1.5rem",
};
