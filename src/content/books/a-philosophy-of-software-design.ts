import { Book, BookCategories, BookStatuses } from "@/framework/client";

export const aPhilosophyOfSoftwareDesignBook: Book = {
  slug: "a-philosophy-of-software-design",
  authors: ["John Ousterhout"],
  status: BookStatuses.Finished,
  title: "A Philosophy of Software Design",
  url: "https://www.web.stanford.edu/~ouster/cgi-bin/book.php",
  category: BookCategories.SoftwareDevelopment,
};
