import { influenceBook } from "@/content/books/influence";
import { Note } from "@/framework/client";

import content from "./content.mdx";
import { influenceNotesSlug } from "./slug";

export const influenceNotes: Note = {
  meta: {
    type: "note",
    source: influenceBook.meta,
    slug: influenceNotesSlug,
    date: "2025-04-13",
    tags: [],
    socialLinks: [],
    shortBlurb:
      "Widely relevant and enduring insights into sales and deception, backed by evidence.",
    blurb: "",
    commentCount: 3,
  },
  content,
};
