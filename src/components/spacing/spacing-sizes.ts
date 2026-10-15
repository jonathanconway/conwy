import { TypeOfConst } from "@/framework";

export const SpacingSizes = {
  XXS: "xxs",
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
  XXL: "xxl",
} as const;

export type SpacingSize = TypeOfConst<typeof SpacingSizes>;
