import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "the-staff-engineers-path",
  authors: ["Tanya Reilly"],
  status: BookStatuses.Listed,
  title: "The Staff Engineer's Path",
  url: "https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/",
  category: BookCategories.SoftwareEngineering,
};
