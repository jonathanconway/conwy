import { MicroMeta, SocialLinkTypes } from "@/framework/client";

export const meta: MicroMeta = {
  blurb: `Brilliant talk! The “debt” metaphor in “tech debt” is problematic. Code quality is best seen as a continuous process, which needs to be supported by frequent delivery, appropriate timeframes, continuous learning, transparency and advocacy.`,
  date: "2024-09-03",
  slug: "sleeman-tech-debt",
  tags: ["software-development"],
  type: "micro",
  socialLinks: [
    {
      type: SocialLinkTypes.Mastodon,
      url: "https://mastodon.social/@conwy/113071008640182408",
    },
    {
      type: SocialLinkTypes.X,
      url: "https://x.com/conw_y/status/1830778968288399537",
    },
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/posts/jonathanconway_luke-sleeman-zero-tech-debt-activity-7236543706261045248-EhCz",
    },
  ],
  mainLink: "https://www.youtube.com/watch?v=g-BF4uOnzGk",
};
