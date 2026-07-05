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
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
});

globalStyle(`pre > code[class*=language-]`, text.size.sm);

globalStyle(`pre > code[class*=language-]`, {
  "@media": {
    [media.lessThanMd]: {
      width: "100%",
      display: "block",
      whiteSpace: "pre-wrap",
    },
  },
});

export const toolbar = style({
  position: "absolute",
  top: "1rem",
  right: "1rem",
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
