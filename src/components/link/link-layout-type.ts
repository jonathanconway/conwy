import { TypeOfConst } from "@/framework";

export const LinkLayoutTypes = {
  Inline: "inline",
  Compact: "compact",
} as const;

export type LinkLayoutType = TypeOfConst<typeof LinkLayoutTypes>;
