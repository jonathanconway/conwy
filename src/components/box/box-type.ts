import { TypeOfConst } from "@/framework/client";

export const BoxTypes = {
  Decorative: "decorative",
  Structural: "structural",
} as const;

export type BoxType = TypeOfConst<typeof BoxTypes>;
