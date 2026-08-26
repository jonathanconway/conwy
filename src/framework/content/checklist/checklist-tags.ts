import { TypeOfConst } from "@/framework/utils";

export const ChecklistTags = {
  SoftwareDevelopment: "software-development",
  SoftwareEngineering: "software-engineering",
  Life: "life",
  Work: "work",
} as const;

export type ChecklistTag = TypeOfConst<typeof ChecklistTags>;

export const CHECKLIST_TAG_TITLES: Record<ChecklistTag, string> = {
  [ChecklistTags.SoftwareDevelopment]: "Software development",
  [ChecklistTags.SoftwareEngineering]: "Software engineering",
  [ChecklistTags.Life]: "Life",
  [ChecklistTags.Work]: "Work",
};
