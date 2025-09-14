import { Book, BookCategories, BookStatuses } from "@/framework/content/book";

export const essentalsOfHumanNutritionBook: Book = {
  meta: {
    type: "book",
    slug: "essentals-of-human-nutrition",
    authors: ["Jim Mann", "Arthur Truswell"],
    status: BookStatuses.Reading,
    title: "Essentals of Human Nutrition",
    url: "https://ebook.app.hcu.edu.gh/wp-content/uploads/2024/06/Jim-Mann-Stewart-Truswell-Essentials-of-Human-Nutrition-Oxford-University-Press-2012.pdf",
    category: BookCategories.Diet,
  },
};
