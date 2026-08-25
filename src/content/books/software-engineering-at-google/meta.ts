import {
  BookCategories,
  BookMeta,
  BookStatuses,
} from "@/framework/content/book";

export const meta: BookMeta = {
  type: "book",
  slug: "software-engineering-at-google",
  authors: ["Titus Winters", "Tom Manshreck", "Hyrum Wright"],
  status: BookStatuses.Finished,
  title: "Software Engineering at Google",
  url: "https://www.google.com.au/books/edition/Software_Engineering_at_Google/V3TTDwAAQBAJ?hl=en",
  category: BookCategories.SoftwareEngineering,
};
