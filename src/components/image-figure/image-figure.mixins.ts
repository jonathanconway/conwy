import { ComplexStyleRule } from "@vanilla-extract/css";

import * as boxMixins from "../box/box.mixins";
import * as linkMixins from "../link/link.mixins";
import { text } from "../styling";
import { vars } from "../theme";

export const container: ComplexStyleRule = {
  padding: "0.5rem",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
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
};

export const imgSized = {
  ...imgBase,
  maxWidth: "100%",
  maxHeight: "20rem",
  width: "auto",
  height: "auto",
};

export const figCaption = {
  ...text.size.xs,
  lineHeight: "1rem",
};
