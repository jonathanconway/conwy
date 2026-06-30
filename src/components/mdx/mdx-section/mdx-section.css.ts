import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-container/mdx-container.css";

globalStyle(`${mdx} section[data-footnotes="true"].footnotes`, {
  display: "none",
});
