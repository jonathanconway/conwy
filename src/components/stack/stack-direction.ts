import { TypeOfConst } from "@/framework/client";

export const StackDirections = {
  Row: "row",
  RowReverse: "row-reverse",
  Column: "column",
  ColumnReverse: "column-reverse",
} as const;

export type StackDirection = TypeOfConst<typeof StackDirections>;
