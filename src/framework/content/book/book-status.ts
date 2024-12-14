import { TypeOfConst } from "@/framework/utils";

export const BookStatuses = {
  Listed: "listed",
  Reading: "reading",
  Finished: "finished",
} as const;

export type BookStatus = TypeOfConst<typeof BookStatuses>;
