import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "AI replacement theory – a critique",
  blurb:
    "AI can do a lot of cool things, but replacing engineers seems unlikely.",
  shortBlurb:
    "AI can do a lot of cool things, but replacing engineers seems unlikely.",
  createdDate: "2026-02-28",
  slug: "ai-replacement",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/ai-replacement/main.png",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/pulse/ai-replacement-theory-critique-jonathan-conway-iaj7c/",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7442373218612719616?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7442373218612719616%2C7442382675270778880%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287442382675270778880%2Curn%3Ali%3Aactivity%3A7442373218612719616%29",
      likeCount: 2,
    },
  ],
  isPinned: true,
};
