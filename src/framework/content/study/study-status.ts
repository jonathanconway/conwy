import { TypeOfConst } from "../../utils/typing";

export const StudyStatuses = {
  Completed: "completed",
  InProgress: "in-progress",
  Planned: "planned",
} as const;

export type StudyStatus = TypeOfConst<typeof StudyStatuses>;
