import { SocialLinkType, SocialLinkTypes } from "@/framework/client";

import { IconType, IconTypes } from "../icon";

interface SocialLinkDetails {
  readonly iconType: IconType;
  readonly title: string;
}

export const SOCIAL_LINKS_DETAILS_BY_TYPE: Record<
  SocialLinkType,
  SocialLinkDetails
> = {
  [SocialLinkTypes.Dev]: {
    iconType: IconTypes.Dev,
    title: "DEV.to article",
  },
  [SocialLinkTypes.Github]: {
    iconType: IconTypes.Github,
    title: "Github repo",
  },
  [SocialLinkTypes.LinkedIn]: {
    iconType: IconTypes.LinkedIn,
    title: "LinkedIn article",
  },
  [SocialLinkTypes.Mastodon]: {
    iconType: IconTypes.Mastodon,
    title: "Mastodon post",
  },
  [SocialLinkTypes.Medium]: {
    iconType: IconTypes.Medium,
    title: "Medium post",
  },
  [SocialLinkTypes.ProductHunt]: {
    iconType: IconTypes.ProductHunt,
    title: "ProductHunt post",
  },
  [SocialLinkTypes.Substack]: {
    iconType: IconTypes.Substack,
    title: "Substack article",
  },
  [SocialLinkTypes.Twitter]: {
    iconType: IconTypes.Twitter,
    title: "Tweet",
  },
  [SocialLinkTypes.Website]: {
    iconType: IconTypes.Website,
    title: "Website",
  },
  [SocialLinkTypes.X]: {
    iconType: IconTypes.X,
    title: "X post",
  },
  [SocialLinkTypes.YouTube]: {
    iconType: IconTypes.YouTube,
    title: "YouTube video",
  },
};
