import { globalStyle, style } from "@vanilla-extract/css";

import * as listItemMixins from "../../list/list-item/list-item.mixins";
import { mdx } from "../mdx-container/mdx-container.css";

export const listItem = style(listItemMixins.listItem);

globalStyle(`${mdx} ol > ${listItem}`, listItemMixins.listItem);

globalStyle(`${mdx} ul > ${listItem}`, listItemMixins.listItem);
