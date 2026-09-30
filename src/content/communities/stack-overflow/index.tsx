import {
  Community,
  CommunityCategories,
  ContentTypes,
} from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const stackOverflowCommunity: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "stack-overflow",
    title: "StackOverflow",
    url: "http://stackoverflow.com",
    category: CommunityCategories.SoftwareDevelopment,
    profileLink: {
      url: "https://stackoverflow.com/users/23341/jonathan",
      title: "jonathan",
    },
    mainImage: {
      src: "/images/communities/stackoverflow.svg",
    },
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
