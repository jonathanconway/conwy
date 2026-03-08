import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-container/mdx-container.css";

const hr = {
  marginTop: "1rem",
};

globalStyle(`${mdx} hr`, hr);
