import * as tableMixins from "../table.mixins";

export const td = {
  ...tableMixins.tableCell,
};

export const tdFirst = {
  borderLeft: "none",
};

export const tdInTrFirst = {
  ...tableMixins.tableCellInTrFirst,
};
