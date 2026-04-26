import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const awsBuilderCommunity: Community = {
  type: "community",
  meta: {
    slug: "aws-builder",
    title: "AWS Builder Center",
    url: "https://builder.aws.com/community",
    category: CommunityCategories.SoftwareDevelopment,
    mainImage: {
      src: "/images/communities/aws-builder.webp",
    },
    profilePosts: [],
  },
  blurbShort: <BlurbShort />,
};
