import { TypeOfConst } from "@/framework";

export const LinkBoxTitleSizes = {
  Medium: "md",
  Small: "sm",
} as const;

export type LinkBoxTitleSize = TypeOfConst<typeof LinkBoxTitleSizes>;
