import { howBrandsGrowBook } from "@/content";
import { Commentary, ContentTypes } from "@/framework/client";

import Content from "./content.mdx";
import { howBrandsGrowCommentarySlug } from "./slug";

export const howBrandsGrowCommentary: Commentary = {
  type: "commentary",
  meta: {
    source: { ...howBrandsGrowBook.meta, type: ContentTypes.Book },
    slug: howBrandsGrowCommentarySlug,
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
