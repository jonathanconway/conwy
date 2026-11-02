"use client";

import {
  BOOK_CATEGORY_TITLES,
  BookCategories,
  ContentTypes,
} from "@/framework";

import { TagFilters, useTagFiltersResults } from "../../filters";
import { ListUnordered } from "../../list";
import { ResponsiveMdHalf } from "../../responsive";

import { BooksListItem } from "./books-list-item";
import * as styles from "./books-list.css";
import { getBooks } from "./get-books-list";

export function BooksList() {
  const books = getBooks();

  const { filteredItems } = useTagFiltersResults({
    items: books,
    contentType: ContentTypes.Book,
    tagField: "meta.category",
  });
  const booksCategoryTagFilterTags = Object.values(BookCategories).map(
    (slug) => ({ slug, title: BOOK_CATEGORY_TITLES[slug] }),
  );

  return (
    <>
      <ResponsiveMdHalf>
        <TagFilters
          contentType="book"
          tags={booksCategoryTagFilterTags}
          tagField="meta.category"
        />
      </ResponsiveMdHalf>

      <ListUnordered className={styles.booksList}>
        {filteredItems.map((book) => (
          <BooksListItem key={book.meta.slug} book={book} />
        ))}
      </ListUnordered>
    </>
  );
}
