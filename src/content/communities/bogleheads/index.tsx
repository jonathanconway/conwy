import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const bogleheadsCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "bogleheads",
    title: "Bogleheads",
    url: "https://www.bogleheads.org",
    mainImage: {
      src: "/images/communities/bogleheads.svg",
    },
    category: CommunityCategories.Investing,
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
