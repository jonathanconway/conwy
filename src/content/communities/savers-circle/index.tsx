import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const saversCircleCommunity: Community = {
  type: "community",
  meta: {
    slug: "savers-circle",
    title: "Savers Circle",
    url: "https://www.skool.com/savers-circle-3790",
    mainImage: {
      src: "/images/communities/savers-circle.jpg",
    },
    category: CommunityCategories.Investing,
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
