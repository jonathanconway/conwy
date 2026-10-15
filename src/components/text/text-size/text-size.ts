import { TypeOfConst } from "@/framework";

export const TextSizes = {
  XXS: "xxs",
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
  XXL: "xxl",
  XXXL: "xxxl",
  XXXXL: "xxxxl",
} as const;

export type TextSize = TypeOfConst<typeof TextSizes>;
