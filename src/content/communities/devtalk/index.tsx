import { Community } from "@/framework";

import BlurbShort from "./blurb-short.mdx";

export const devTalkCommunity: Community = {
  type: "community",
  meta: {
    slug: "devtalk",
    title: "DevTalk",
    url: "https://forum.devtalk.com",
    mainImage: {
      src: "/images/communities/devtalk.png",
    },
    myProfileUrl: "https://stackoverflow.com/users/23341/jonathan",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
