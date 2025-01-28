import { TypeOfConst } from "../../utils";

export const StudyStatuses = {
  Completed: "completed",
  InProgress: "in-progress",
  Planned: "planned",
} as const;

export type StudyStatus = TypeOfConst<typeof StudyStatuses>;
