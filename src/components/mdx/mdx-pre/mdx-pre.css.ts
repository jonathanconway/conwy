import { globalStyle } from "@vanilla-extract/css";

import * as focusOutlineMixins from "../../focus-outline/focus-outline.mixins";
import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

globalStyle(`${mdx} pre[class*=language-][class*=language-]`, {
  ...textMixins.preFormattedInner,
  ...focusOutlineMixins.focusOutline,
  overflow: "unset",
});

globalStyle(`${mdx} pre code`, {
  border: "none",
});
