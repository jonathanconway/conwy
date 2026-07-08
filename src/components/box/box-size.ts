import { TypeOfConst } from "@/framework/client";

export const BoxSizes = {
  Medium: "medium",
  Small: "small",
} as const;

export type BoxSize = TypeOfConst<typeof BoxSizes>;
