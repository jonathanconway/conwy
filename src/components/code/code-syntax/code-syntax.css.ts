import { globalStyle, style } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import * as boxMixins from "../../box/box.mixins";
import { media, rounded } from "../../styling";
import * as textSizeConsts from "../../text/text-size/text-size.consts";

export const container = style({
  position: "relative",
  display: "contents",
});

export const code = style({
  position: "relative",
  display: "inline",
  paddingRight: "2rem", // allow space for Copy button
  width: "100%",
  ...rounded.md,
  ...boxMixins.boxBorderDecorative,
});

globalStyle(`pre > code[class*=language-]`, {
  fontSize: rems(textSizeConsts.fontSizeRems.s),
});

const codeWrapping = {
  width: "100%",
  display: "block",
  whiteSpace: "pre-wrap",
};

// Some languages are amenable to text wrapping, as they do not need to support line numbers.

const wrappingLanguages = ["md"];

globalStyle(
  wrappingLanguages
    .map((wrappingLanguage) => `pre > code.language-${wrappingLanguage}`)
    .join(","),
  codeWrapping,
);

// For all other languages, scrolling should be used rather than wrapping, to support line numbers.

const codeScrolling = {
  display: "inline-block",
  overflow: "scroll",
};

globalStyle(
  wrappingLanguages
    .map((wrappingLanguage) => `pre > code.language-${wrappingLanguage}`)
    .join(","),
  codeWrapping,
);

globalStyle(
  `pre > code${wrappingLanguages.map((wrappingLanguage) => `:not(.language-${wrappingLanguage})`).join("")}`,
  codeScrolling,
);

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
