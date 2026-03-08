import { globalStyle } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

globalStyle(`${mdx} ol > li`, textMixins.li);
globalStyle(`${mdx} ul > li`, textMixins.li);
