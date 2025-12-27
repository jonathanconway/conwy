import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const stackOverflowCommunity: Community = {
  type: "community",
  meta: {
    slug: "stack-overflow",
    title: "StackOverflow",
    url: "http://stackoverflow.com",
    category: CommunityCategories.SoftwareDevelopment,
    myProfileUrl: "https://forum.devtalk.com/u/conwy/summary",
    mainImage: {
      src: "/images/communities/stackoverflow.svg",
    },
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
