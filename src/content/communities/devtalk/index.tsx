import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const devTalkCommunity: Community = {
  type: "community",
  meta: {
    slug: "devtalk",
    title: "DevTalk",
    url: "https://forum.devtalk.com",
    category: CommunityCategories.SoftwareDevelopment,
    mainImage: {
      src: "/images/communities/devtalk.png",
    },
    myProfileUrl: "https://stackoverflow.com/users/23341/jonathan",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
