import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const devCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "dev",
    title: "Dev",
    url: "https://dev.to",
    category: CommunityCategories.SoftwareDevelopment,
    mainImage: {
      src: "/images/communities/dev.webp",
    },
    profileLink: {
      url: "https://dev.to/conw_y",
      title: "conw_y",
    },
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
