import { CommunityGenTemplateParams } from "./community.params";

export const communityIndexGen = ({
  name,
  nameRootObject,
  title,
  url,
}: CommunityGenTemplateParams) =>
  `

import { Community, CommunityCategories } from "@/framework/client";

import BlurbShort from "./blurb-short.mdx";

export const ${nameRootObject}: Community = {
  type: "community",
  meta: {
    slug: "${name}",
    title: "${title}",
    url: "${url}",
    mainImage: {
      src: "/images/communities/${name}.png",
    },
    category: CommunityCategories.SoftwareDevelopment,
    myProfileUrl: "",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};

`.trim();
