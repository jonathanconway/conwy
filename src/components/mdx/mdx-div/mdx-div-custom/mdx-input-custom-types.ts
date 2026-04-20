import { TypeOfConst } from "@/framework/client";

export const MdxInputCustomTypes = {
  Checklist: "checklist",
} as const;

export type MdxInputCustomType = TypeOfConst<typeof MdxInputCustomTypes>;
