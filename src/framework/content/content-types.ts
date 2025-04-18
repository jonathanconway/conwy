import { TypeOfConst } from "../utils";

export const ContentTypes = {
  Book: "book",
  Article: "article",
  Micro: "micro",
  Work: "work",
  Project: "project",
};

export type ContentType = TypeOfConst<typeof ContentTypes>;
