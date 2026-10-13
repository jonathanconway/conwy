import { TypeOfConst } from "@/framework";

export const LinkBoxSizes = {
  Medium: "medium",
  Small: "small",
} as const;

export type LinkBoxSize = TypeOfConst<typeof LinkBoxSizes>;
