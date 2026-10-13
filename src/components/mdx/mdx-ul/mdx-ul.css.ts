import { globalStyle, style } from "@vanilla-extract/css";

import * as listMixins from "../../list/list.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

export const ul = style(listMixins.list);

globalStyle(`${mdx} ${ul}`, listMixins.list);
