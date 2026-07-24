import { globalStyle, style } from "@vanilla-extract/css";

import * as boxMixins from "../../box/box.mixins";
import { media, rounded, text } from "../../styling";

export const container = style({
  position: "relative",
  display: "contents",
});

export const code = style({
  position: "relative",
  display: "inline",
  paddingRight: "2rem", // allow space for Copy button
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
});

globalStyle(`pre > code[class*=language-]`, text.size.sm);

const codeWrapping = {
  width: "100%",
  display: "block",
  whiteSpace: "pre-wrap",
};

globalStyle(`pre > code.language-md`, codeWrapping);

globalStyle(`pre > code[class*=language-]`, {
  "@media": {
    [media.lessThanMd]: codeWrapping,
  },
});

globalStyle(`code .line-highlight.line-highlight`, {
  marginTop: 0,
});

export const toolbar = style({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  zIndex: 1,
});

globalStyle(
  `div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button`,
  { display: "none" },
);

globalStyle(`pre.language-none code.language-none`, {
  display: "block",
});

globalStyle(`pre.language-none code.language-none ${toolbar}`, {
  top: 0,
  right: 0,
});
