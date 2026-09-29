import { SocialLinkType, SocialLinkTypes } from "./social-link-type";

export const SocialLinkTypeHosts: Record<
  Exclude<SocialLinkType, typeof SocialLinkTypes.Website>,
  string
> = {
  [SocialLinkTypes.Dev]: "dev.to",
  [SocialLinkTypes.DevTalk]: "devtalk.com",
  [SocialLinkTypes.GitHub]: "github.com",
  [SocialLinkTypes.LinkedIn]: "linkedin.com/pulse",
  [SocialLinkTypes.LinkedInPost]: "linkedin.com/posts",
  [SocialLinkTypes.Mastodon]: "mastodon.social",
  [SocialLinkTypes.Medium]: "medium.com",
  [SocialLinkTypes.ProductHunt]: "producthunt.com",
  [SocialLinkTypes.RationalReminder]: "community.rationalreminder",
  [SocialLinkTypes.Reddit]: "reddit.com",
  [SocialLinkTypes.Substack]: "substack.com",
  [SocialLinkTypes.Twitter]: "x.com",
  [SocialLinkTypes.Whirlpool]: "forums.whirlpool.net.au",
  [SocialLinkTypes.X]: "x.com",
  [SocialLinkTypes.YouTube]: "youtube.com",
};
