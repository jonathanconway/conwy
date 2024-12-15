import { Url } from "../url";

import { BookCategory } from "./book-category";
import { BookStatus } from "./book-status";

export interface Book {
  readonly title: string;
  readonly authors: readonly string[];
  readonly url: Url;
  readonly status: BookStatus;
  readonly category: BookCategory;
}
