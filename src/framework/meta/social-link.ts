import { TypeOfConst } from "../utils";

export const SocialLinkTypes = {
  Dev: "dev",
  Github: "github",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Medium: "medium",
  ProductHunt: "product-hunt",
  Substack: "substack",
  Twitter: "twitter",
  Website: "website",
  X: "x",
  YouTube: "youtube",
} as const;

export const SocialLinkLabels = {
  [SocialLinkTypes.Dev]: "DEV.to",
  [SocialLinkTypes.Github]: "GitHub",
  [SocialLinkTypes.LinkedIn]: "LinkedIn",
  [SocialLinkTypes.Mastodon]: "Mastodon",
  [SocialLinkTypes.Medium]: "Medium",
  [SocialLinkTypes.ProductHunt]: "Product Hunt",
  [SocialLinkTypes.Substack]: "Substack",
  [SocialLinkTypes.Twitter]: "Twitter",
  [SocialLinkTypes.Website]: "Website",
  [SocialLinkTypes.X]: "X",
  [SocialLinkTypes.YouTube]: "YouTube",
};

export type SocialLinkType = TypeOfConst<typeof SocialLinkTypes>;

export interface SocialLink {
  readonly type: SocialLinkType;
  readonly url: string;
  readonly title?: string;
}
