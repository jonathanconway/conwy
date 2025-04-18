import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const designingDistributedSystemsBook: Book = {
  meta: {
    type: "book",
    slug: "designing-distributed-systems",
    authors: ["Brendan Burns"],
    status: BookStatuses.Reading,
    title: "Designing Distributed Systems",
    url: "https://info.microsoft.com/rs/157-GQE-382/images/EN-CNTNT-eBook-DesigningDistributedSystems.pdf",
    category: BookCategories.SoftwareDevelopment,
  },
};
