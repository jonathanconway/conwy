import { influenceBook } from "@/content/books/influence";
import { Note } from "@/framework/client";

import Content from "./content.mdx";
import { influenceNoteSlug } from "./slug";

export const influenceNote: Note = {
  type: "note",
  meta: {
    source: influenceBook.meta,
    slug: influenceNoteSlug,
    date: "2025-04-13",
    tags: [],
    socialLinks: [],
    shortBlurb:
      "Widely relevant and enduring insights into sales and deception, backed by evidence.",
    blurb: "",
    commentCount: 3,
  },
  content: <Content />,
};
