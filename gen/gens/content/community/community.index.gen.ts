import { CommunityGenTemplateParams } from "./community.params";

export const communityIndexGen = ({
  name,
  nameRootObject,
  title,
  url,
}: CommunityGenTemplateParams) =>
  `

import { Community } from "@/framework/client";

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
    myProfileUrl: "",
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};

`.trim();
