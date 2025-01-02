import { TypeOfConst } from "@/framework";

export const BoxTypes = {
  Decorative: "decorative",
  Structural: "structural",
} as const;

export type BoxType = TypeOfConst<typeof BoxTypes>;
