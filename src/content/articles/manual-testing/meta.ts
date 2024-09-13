import { ArticleMeta, SocialLinkTypes } from "@/framework";

export const meta: ArticleMeta = {
  title: "Manual testing",
  blurb:
    "Manual testing offers distinct and powerful benefits such as understanding system behaviour with minimal documentation, verifying changes rapidly in multiple environments and empathising with end-users. Structuring your manual test efforts compounds these benefits.",
  shortBlurb:
    "Structured manual testing offers distinct and powerful benefits when delivering with speed and quality.",
  date: "2024-09-13",
  slug: "manual-testing",
  type: "article",
  mainImage: "main.jpg",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/manual-testing-2ngk",
    },
    {
      type: SocialLinkTypes.Website,
      url: "https://testmatic.surge.sh/",
      title: "Testmatic: test case tool",
    },
  ],
};
