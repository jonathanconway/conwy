import * as tableMixins from "../table.mixins";

export const th = tableMixins.tableCell;

export const thFirst = {
  borderLeft: "none",
};

export const thInTHead = {
  borderTop: "none",
};

export const thInTrFirst = {
  ...tableMixins.tableCellInTrFirst,
};
