import { MicroMeta, PostTags, SocialLinkTypes } from "@/framework";

export const meta: MicroMeta = {
  createdDate: "2026-10-15",
  slug: "minimalist-shoes",
  shortBlurb: "Minimalist shoes",
  tags: [PostTags.Life],
  socialLinks: [
    {
      type: SocialLinkTypes.Forum,
      url: "https://forum.earlyretirementextreme.com/viewtopic.php?p=321575#p321575",
      title: "Post on ERE forum",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Forum,
      url: "https://forum.earlyretirementextreme.com/viewtopic.php?p=321575#p321575",
      title: "Post on ERE forum",
    },
  ],
  isPinned: true,
};
