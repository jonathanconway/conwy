import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

import { howBrandsGrowNotesSlug } from "../notes/how-brands-grow/slug";

export const howBrandsGrowBook: Book = {
  meta: {
    type: "book",
    slug: "how-brands-grow",
    authors: ["Byron Sharp"],
    status: BookStatuses.Finished,
    title: "How Brands Grow",
    url: "http://www.amazon.com/How-Brands-Grow-What-Marketers/dp/0195573560",
    category: BookCategories.Business,

    notesSlug: howBrandsGrowNotesSlug,
  },
};
