import { ContentType, ContentTypes } from "./content-types";

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  [ContentTypes.Article]: "Article",
  [ContentTypes.Book]: "Book",
  [ContentTypes.Checklist]: "Checklist",
  [ContentTypes.Commentary]: "Commentary",
  [ContentTypes.Colleague]: "Colleague",
  [ContentTypes.Community]: "Community",
  [ContentTypes.Idea]: "Idea",
  [ContentTypes.Micro]: "Micro",
  [ContentTypes.Page]: "Page",
  [ContentTypes.Project]: "Project",
  [ContentTypes.Prompt]: "Prompt",
  [ContentTypes.Quote]: "Quote",
  [ContentTypes.Study]: "Study",
  [ContentTypes.Testimonial]: "Testimonial",
  [ContentTypes.Tool]: "Tool",
  [ContentTypes.Work]: "Work",
} as const;
