import { howBrandsGrowBook } from "@/content/books/how-brands-grow";
import { Commentary, ContentTypes, getContentLink } from "@/framework/client";

import Content from "./content.mdx";
import { howBrandsGrowCommentarySlug } from "./slug";

export const howBrandsGrowCommentary: Commentary = {
  type: ContentTypes.Commentary,
  meta: {
    source: getContentLink(howBrandsGrowBook),
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
