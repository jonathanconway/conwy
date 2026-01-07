import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const bogleheadsCommunity: Community = {
  type: "community",
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
