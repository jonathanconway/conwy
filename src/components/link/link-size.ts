import { TypeOfConst } from "@/framework";

export const LinkSizes = {
  XXS: "xxs",
  XS: "xs",
  S: "s",
} as const;

export type LinkSize = TypeOfConst<typeof LinkSizes>;
