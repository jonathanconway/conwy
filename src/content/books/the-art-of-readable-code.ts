import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const theArtOfReadableCodeBook: Book = {
  meta: {
    type: "book",
    slug: "the-art-of-readable-code",
    authors: ["Dustin Boswell"],
    status: BookStatuses.Finished,
    title: "The Art of Readable Code",
    url: "https://www.oreilly.com/library/view/the-art-of/9781449318482/",
    category: BookCategories.SoftwareDevelopment,
  },
};
