import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const crucialConversationsBook: Book = {
  meta: {
    type: "book",
    slug: "crucial-conversations",
    authors: ["Joseph Grenny"],
    status: BookStatuses.Listed,
    title: "Crucial Conversations",
    url: "https://en.wikipedia.org/wiki/Crucial_Conversations:_Tools_for_Talking_When_Stakes_Are_High",
    category: BookCategories.Psychology,
  },
};
