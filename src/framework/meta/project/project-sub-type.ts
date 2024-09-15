import { TypeOfConst } from "@/framework/utils";

export const ProjectSubTypes = {
  Library: "library",
  Standard: "standard",
  Tool: "tool",
  Website: "website",
} as const;

export type ProjectSubType = TypeOfConst<typeof ProjectSubTypes>;
