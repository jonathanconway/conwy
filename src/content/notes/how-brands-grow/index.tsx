import { howBrandsGrowBook } from "@/content/books/how-brands-grow";
import { Note } from "@/framework/client";

import Content from "./content.mdx";
import { howBrandsGrowNoteSlug } from "./slug";

export const howBrandsGrowNote: Note = {
  type: "note",
  meta: {
    source: howBrandsGrowBook.meta,
    slug: howBrandsGrowNoteSlug,
    date: "2025-04-18",
    tags: [],
    socialLinks: [],
    blurb: "",
    shortBlurb:
      "Rigorous application of evidence, critical lens on marketing as a profession, powerful concept of 'memory structures'",
    commentCount: 8,
  },
  content: <Content />,
};
