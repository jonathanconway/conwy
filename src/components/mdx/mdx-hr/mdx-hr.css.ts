import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

const hr = {
  marginTop: "1rem",
};

globalStyle(`${mdx} hr`, hr);
