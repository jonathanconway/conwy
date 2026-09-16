import { TypeOfConst } from "../../utils";

export const ContentTypes = {
  Article: "article",
  Book: "book",
  Checklist: "checklist",
  Commentary: "commentary",
  Community: "community",
  Colleague: "colleague",
  Idea: "idea",
  Micro: "micro",
  Page: "page",
  Project: "project",
  Prompt: "prompt",
  Quote: "quote",
  Study: "study",
  Testimonial: "testimonial",
  Tool: "tool",
  Work: "work",
} as const;

export type ContentType = TypeOfConst<typeof ContentTypes>;
