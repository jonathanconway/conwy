import { globalStyle } from "@vanilla-extract/css";

import { mdx } from "../mdx-container/mdx-container.css";

import { hrBorder } from "./mdx-hr.mixins";

const hr = {
  marginTop: "1.7rem",
  marginBottom: "1rem",
  ...hrBorder,
};

globalStyle(`${mdx} hr`, hr);
