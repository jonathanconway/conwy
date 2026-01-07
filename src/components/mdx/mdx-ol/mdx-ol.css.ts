import { globalStyle } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

globalStyle(`${mdx} ol`, textMixins.ol);
