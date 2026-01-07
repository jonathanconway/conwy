import {
  ComplexStyleRule,
  GlobalStyleRule,
  globalStyle,
  style,
} from "@vanilla-extract/css";

import * as tableMixins from "./table.mixins";

export const table = style(tableMixins.table);

globalStyle(
  `${table} th, ${table} td`,
  tableMixins.tableCell as GlobalStyleRule,
);

globalStyle(
  `${table} thead th`,
  tableMixins.tableCellHeader as GlobalStyleRule,
);

globalStyle(
  `${table} thead th:first-child`,
  tableMixins.tableCellHeaderTopLeft,
);

globalStyle(
  `${table} thead th:last-child`,
  tableMixins.tableCellHeaderTopRight,
);

export const tableBodyCell = style(
  tableMixins.tableCellBody as ComplexStyleRule,
);

globalStyle(`${table} tbody td`, tableMixins.tableCellBody as GlobalStyleRule);

globalStyle(
  `${table} th:first-child, ${table} td:first-child`,
  tableMixins.tableCellLeft as GlobalStyleRule,
);

globalStyle(`${table} tbody tr:last-child td`, tableMixins.tableCellBodyBottom);

globalStyle(
  `${table} tbody tr:last-child td:first-child`,
  tableMixins.tableCellBodyBottomLeft,
);

globalStyle(
  `${table} tbody tr:last-child td:last-child`,
  tableMixins.tableCellBodyBottomRight,
);
