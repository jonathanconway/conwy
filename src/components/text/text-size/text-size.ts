import { TypeOfConst } from "@/framework/client";

export const TextSizes = {
  _2xs: "_2xs",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  _2xl: "_2xl",
  _3xl: "_3xl",
  _4xl: "_4xl",
} as const;

export type TextSize = TypeOfConst<typeof TextSizes>;
