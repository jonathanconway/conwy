import { TypeOfConst } from "@/framework/client";

export const MdxDivCustomTypes = {
  Checklist: "checklist",
} as const;

export type MdxDivCustomType = TypeOfConst<typeof MdxDivCustomTypes>;
