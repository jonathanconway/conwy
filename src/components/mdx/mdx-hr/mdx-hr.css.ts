import { GlobalStyleRule, globalStyle } from "@vanilla-extract/css";

import * as dividerMixins from "../../divider/divider.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

const hr: GlobalStyleRule = {
  marginTop: "1.7rem",
  marginBottom: "1rem",
  ...dividerMixins.hr,
};

globalStyle(`${mdx} hr`, hr);
