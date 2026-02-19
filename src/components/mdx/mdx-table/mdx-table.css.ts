import {
  ComplexStyleRule,
  GlobalStyleRule,
  globalStyle,
  style,
} from "@vanilla-extract/css";

import * as tableMixins from "../../table/table.mixins";
import { mdx } from "../mdx-wrapper/mdx-wrapper.css";

globalStyle(`${mdx} table`, tableMixins.table);

globalStyle(
  `${mdx} table th, ${mdx} table td`,
  tableMixins.tableCell as GlobalStyleRule,
);

globalStyle(
  `${mdx} table thead th`,
  tableMixins.tableCellHeader as GlobalStyleRule,
);

globalStyle(
  `${mdx} table thead th:first-child`,
  tableMixins.tableCellHeaderTopLeft,
);

globalStyle(
  `${mdx} table thead th:last-child`,
  tableMixins.tableCellHeaderTopRight,
);

export const tableBodyCell = style(
  tableMixins.tableCellBody as ComplexStyleRule,
);

globalStyle(
  `${mdx} table tbody td`,
  tableMixins.tableCellBody as GlobalStyleRule,
);

globalStyle(
  `${mdx} table th:first-child, ${mdx} table td:first-child`,
  tableMixins.tableCellLeft as GlobalStyleRule,
);

globalStyle(
  `${mdx} table tbody tr:last-child td`,
  tableMixins.tableCellBodyBottom,
);

globalStyle(
  `${mdx} table tbody tr:last-child td:first-child`,
  tableMixins.tableCellBodyBottomLeft,
);

globalStyle(
  `${mdx} table tbody tr:last-child td:last-child`,
  tableMixins.tableCellBodyBottomRight,
);
