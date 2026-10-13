import { CommunityGenTemplateParams } from "./community-gen-template-params";

export const communityGenIndexTemplate = ({
  slug,
  nameRootObject,
  title,
  url,
  categoryEnumName,
}: CommunityGenTemplateParams) =>
  `

import { Community, CommunityCategories, ContentTypes } from "@/framework";

import BlurbShort from "./blurb-short.mdx";

export const ${nameRootObject}: Community = {
  type: ContentTypes.Community,
  meta: {
    slug: "${slug}",
    title: "${title}",
    url: "${url}",
    mainImage: {
      src: "/images/communities/${slug}.png",
    },
    category: CommunityCategories.${categoryEnumName},
    myPosts: [],
  },
  blurbShort: <BlurbShort />,
};

`.trim();
