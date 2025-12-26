import { Community } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const whirlpoolCommunity: Community = {
  type: "community",
  meta: {
    slug: "whirlpool",
    title: "Whirlpool",
    url: "https://forums.whirlpool.net.au",
    mainImage: {
      src: "/images/communities/whirlpool.png",
    },
    myProfileUrl: "",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
