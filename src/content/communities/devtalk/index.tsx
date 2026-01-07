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
    profileLink: {
      url: "https://forum.devtalk.com/u/conwy/summary",
      title: "conwy",
    },
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
