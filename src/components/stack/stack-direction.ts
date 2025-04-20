import { TypeOfConst } from "@/framework/client";

export const StackDirections = {
  Row: "row",
  Column: "column",
};

export type StackDirection = TypeOfConst<typeof StackDirections>;
