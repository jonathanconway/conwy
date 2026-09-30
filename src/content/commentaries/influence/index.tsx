import { influenceBook } from "@/content/books/influence";
import { Commentary, ContentTypes, getContentLink } from "@/framework/client";

import Content from "./content.mdx";
import { influenceCommentarySlug } from "./slug";

export const influenceCommentary: Commentary = {
  type: ContentTypes.Commentary,
  meta: {
    source: getContentLink(influenceBook),
    slug: influenceCommentarySlug,
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
