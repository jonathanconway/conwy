import { Community } from "@/framework";

import BlurbShort from "./blurb-short.mdx";

export const stackOverflowCommunity: Community = {
  type: "community",
  meta: {
    slug: "stack-overflow",
    title: "StackOverflow",
    url: "http://stackoverflow.com",
    myProfileUrl: "https://forum.devtalk.com/u/conwy/summary",
    mainImage: {
      src: "/images/communities/stackoverflow.svg",
    },
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
