import { TypeOfConst } from "@/framework/utils";

export const IllustrationCompositeTypes = {
  Post3Circle: "post-3-circle",
} as const;

export type IllustrationCompositeType = TypeOfConst<
  typeof IllustrationCompositeTypes
>;
