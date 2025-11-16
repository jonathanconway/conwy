import { NoteSlug } from "../note/note-slug";
import { Slug } from "../slug";
import { Url } from "../url";

import { BookCategory } from "./book-category";
import { BookStatus } from "./book-status";

export interface BookMeta {
  readonly type: "book";
  readonly slug: Slug;
  readonly title: string;
  readonly authors: readonly string[];
  readonly url?: Url;
  readonly status: BookStatus;
  readonly category: BookCategory;

  readonly notesSlug?: NoteSlug;
}
