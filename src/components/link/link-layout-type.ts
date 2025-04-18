import { TypeOfConst } from "@/framework/client";

export const LinkLayoutTypes = {
  Inline: "inline",
  Compact: "compact",
} as const;

export type LinkLayoutType = TypeOfConst<typeof LinkLayoutTypes>;
