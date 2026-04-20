import { globalStyle, style } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

export const ul = style(textMixins.ul);

globalStyle(`${mdx} ${ul}`, textMixins.ul);
