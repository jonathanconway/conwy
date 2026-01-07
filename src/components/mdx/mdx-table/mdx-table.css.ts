import { globalStyle } from "@vanilla-extract/css";

import * as tableMixins from "../../table/table.mixins";
import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

globalStyle(`${mdx} table`, tableMixins.table);
