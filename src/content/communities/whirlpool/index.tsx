import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const whirlpoolCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "whirlpool",
    title: "Whirlpool",
    url: "https://forums.whirlpool.net.au",
    category: CommunityCategories.SoftwareDevelopment,
    mainImage: {
      src: "/images/communities/whirlpool.png",
    },
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
