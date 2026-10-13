import { TypeOfConst } from "@/framework/client";

export const LabelSizes = {
  Regular: "regular",
  Small: "small",
} as const;

export type LabelSize = TypeOfConst<typeof LabelSizes>;
