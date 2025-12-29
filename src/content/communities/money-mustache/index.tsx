import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const moneyMustacheCommunity: Community = {
  type: "community",
  meta: {
    slug: "money-mustache",
    title: "Mr Money Mustache",
    url: "https://forum.mrmoneymustache.com",
    mainImage: {
      src: "/images/communities/money-mustache.ico",
    },
    category: CommunityCategories.Investing,
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
