import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-container/mdx-container.css";

const a = {
  whiteSpace: "unset",
};

globalStyle(`${mdx} a`, a);
