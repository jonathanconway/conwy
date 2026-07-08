import { TypeOfConst } from "@/framework/client";

export const LinkBoxSizes = {
  Medium: "medium",
  Small: "small",
} as const;

export type LinkBoxSize = TypeOfConst<typeof LinkBoxSizes>;
