import { globalStyle, style } from "@vanilla-extract/css";

import * as labelMixins from "../../label/label.mixins";
import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

globalStyle(`${mdx} pre[class*=language-][class*=language-]`, textMixins.pre);

globalStyle(`${mdx} pre code`, {
  border: "none",
});

export const preLabel = style({
  ...labelMixins.label,
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  fontSize: textMixins.small.fontSize,
});
