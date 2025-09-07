import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const the7HabitsOfHighlySuccessfulPeopleBook: Book = {
  meta: {
    type: "book",
    slug: "the-80000-hours-career-guide",
    authors: ["Stephen Covey"],
    status: BookStatuses.Finished,
    title: "The 7 Habits of Highly Successful People",
    url: "https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People/",
    category: BookCategories.SelfHelp,
  },
};
