import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

const a = {
  whiteSpace: "unset",
};

globalStyle(`${mdx} a`, a);
