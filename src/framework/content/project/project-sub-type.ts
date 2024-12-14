import { TypeOfConst } from "../../utils";

export const ProjectSubTypes = {
  Library: "library",
  Standard: "standard",
  Tool: "tool",
  Website: "website",
} as const;

export type ProjectSubType = TypeOfConst<typeof ProjectSubTypes>;
