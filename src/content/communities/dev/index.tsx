import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const devCommunity: Community = {
  type: "community",
  meta: {
    slug: "dev",
    title: "Dev",
    url: "https://dev.to",
    category: CommunityCategories.SoftwareDevelopment,
    mainImage: {
      src: "/images/communities/dev.webp",
    },
    myProfileUrl: "",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};
