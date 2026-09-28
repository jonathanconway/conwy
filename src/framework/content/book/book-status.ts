import { TypeOfConst } from "../../utils/typing";

export const BookStatuses = {
  Listed: "listed",
  Reading: "reading",
  Finished: "finished",
} as const;

export type BookStatus = TypeOfConst<typeof BookStatuses>;
