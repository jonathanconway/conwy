import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const saversCircleCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "savers-circle",
    title: "Savers Circle",
    url: "https://www.skool.com/savers-circle-3790",
    mainImage: {
      src: "/images/communities/savers-circle.jpg",
    },
    category: CommunityCategories.Investing,
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
