import { globalStyle } from "@vanilla-extract/css";

import * as textMixins from "../../text/text.mixins";
import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

globalStyle(`${mdx} p`, textMixins.paragraph);

globalStyle(`${mdx} p:first-child`, textMixins.paragraphFirst);
