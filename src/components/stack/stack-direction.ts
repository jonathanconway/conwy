import { CSSProperties } from "react";

import { TypeOfConst } from "@/framework/client";

export const StackDirections: Record<
  string,
  CSSProperties["flexDirection"] & string
> = {
  Row: "row",
  RowReverse: "row-reverse",
  Column: "column",
  ColumnReverse: "column-reverse",
};

export type StackDirection = TypeOfConst<typeof StackDirections>;
