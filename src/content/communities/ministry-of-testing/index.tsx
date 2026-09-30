import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const ministryOfTestingCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "ministry-of-testing",
    title: "Ministry of Testing",
    url: "https://club.ministryoftesting.com/",
    mainImage: {
      src: "/images/communities/ministry-of-testing.png",
    },
    category: CommunityCategories.SoftwareDevelopment,
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
